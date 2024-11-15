<?php
namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model {

    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $allowedFields = ['name','role', 'email', 'password'];

    //validations

    protected $validationRules = [

        'name' => 'required',
        'role' => 'required',
        'email' => 'required',
        'password' => 'required'
    ];

    protected $validationMessages = [
        'name' => [
            'required' => 'Name is required'
        ],
        'role' => [
            'required' => 'Role is required'
        ],
        'email' => [
            'required' => 'Email is required'
        ],
        'password' => [
            'required' => 'Password is required'
        ]
    ];
}