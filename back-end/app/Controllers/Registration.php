<?php
namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class Registration extends ResourceController
{
    protected $modelName = 'App\Models\RegistrationModel';
    protected $format = 'json';

    public function index()
    {
        try {
            return $this->respond($this->model->findAll());
        } catch (\Throwable $th) {
            return $this->failServerError('An error has occurred');
        }
    }

    public function show($id = null)
    {
        try {
            return $this->respond($this->model->find($id));
        } catch (\Throwable $th) {
            return $this->failServerError('An error has occurred');
        }
    }

    public function create()
    {
        try {

            $data = $this->request->getJSON();
            if ($this->model->insert($data)) {
                $response = [
                    'status' => 201,
                    'error' => null,
                    'message' => [
                        'success' => 'Registration created successfully'
                    ]
                ];
                return $this->respondCreated($response);
            }
        } catch (\Throwable $th) {
            return $this->failServerError('An error has occurred');
        }
    }

    public function update($id = null)
    {
        try {
            $data = $this->request->getJSON();
            if ($this->model->update($id, $data)) {
                $response = [
                    'status' => 200,
                    'error' => null,
                    'message' => [
                        'success' => 'Registration updated successfully'
                    ]
                ];
                return $this->respond($response);
            }
        } catch (\Throwable $th) {
            return $this->failServerError('An error has occurred');
        }
    }

    public function delete($id = null)
    {
        try {
            if ($this->model->delete($id)) {
                $response = [
                    'status' => 200,
                    'error' => null,
                    'message' => [
                        'success' => 'Registration deleted successfully'
                    ]
                ];
                return $this->respondDeleted($response);
            }
        } catch (\Throwable $th) {
            return $this->failServerError('An error has occurred');
        }
    }

}