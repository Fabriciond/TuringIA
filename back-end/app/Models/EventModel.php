<?php
namespace App\Models;

use CodeIgniter\Model;

class EventModel extends Model
{
    protected $table = 'events';
    protected $primaryKey = 'id';
    protected $allowedFields = ['title', 'description', 'date', 'time', 'location', 'image', 'max_capacity'];

    //validations

    protected $validationRules = [
        'title' => 'required',
        'description' => 'required',
        'date' => 'required',
        'time' => 'required',
        'location' => 'required',
        'image' => 'required',
        'max_capacity' => 'required'
    ];

    protected $validationMessages = [
        'title' => [
            'required' => 'Title is required'
        ],
        'description' => [
            'required' => 'Description is required'
        ],
        'date' => [
            'required' => 'Date is required'
        ],
        'time' => [
            'required' => 'Time is required'
        ],
        'location' => [
            'required' => 'Location is required'
        ],
        'image' => [
            'required' => 'Image is required'
        ],
        'max_capacity' => [
            'required' => 'Max capacity is required'
        ]
    ];

}