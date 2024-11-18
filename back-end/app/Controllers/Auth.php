<?php
namespace App\Controllers;


use App\Models\UserModel;
use CodeIgniter\RESTful\ResourceController;
class Auth extends ResourceController
{   
    public function register()
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|valid_email|is_unique[users.email]',
            'password' => 'required'
        ];

        if (!$this->validate($rules)) {
            return $this->fail($this->validator->getErrors());
        }

        $model = new UserModel();
        $model->save([
            'name' => $this->request->getVar('name'),
            'email' => $this->request->getVar('email'),
            'role' => 'user',
            'password' => password_hash($this->request->getVar('password'), PASSWORD_DEFAULT)
        ]);

        return $this->respondCreated([
            'message' => 'User registered successfully'
        ]);
    }

    public function login()
    {
        $rules = [
            'email' => 'required|valid_email',
            'password' => 'required'
        ];

        if (!$this->validate($rules)) {
            return $this->fail($this->validator->getErrors());
        }

        $model = new UserModel();
        $email = $this->request->getVar('email');
        $password = $this->request->getVar('password');

        $user = $model->where('email', $email)->first();

        if (!$user) {
            log_message('error', 'User not found for email: ' . $email);
            return $this->fail('User not found.');
        }

        if (!password_verify($password, $user['password'])) {
            log_message('error', 'Password verification failed for email: ' . $email);
            return $this->fail('Invalid password.');
        }

        return $this->respond($user);
    }


    private function generateToken($user)
    {
        $payload = [
            'user_id' => $user['id'],
            'email' => $user['email'],
            'iat' => time(),
            'exp' => time() + 60 * 60
        ];

        return true;
    }
}