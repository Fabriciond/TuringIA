<?php
namespace App\Models;

use CodeIgniter\Model;

class RegistrationModel extends Model
{
    protected $table = 'registrations';
    protected $primaryKey = 'id';
    protected $allowedFields = ['id_event', 'id_user'];

    //validations

    protected $validationRules = [
        'id_event' => 'required',
        'id_user' => 'required'
    ];

    protected $validationMessages = [
        'id_event' => [
            'required' => 'Event ID is required'
        ],
        'id_user' => [
            'required' => 'User ID is required'
        ]
    ];
}