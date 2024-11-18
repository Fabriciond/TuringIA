<?php
namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;

class Event extends ResourceController
{
    protected $modelName = 'App\Models\EventModel';

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

            $data = $this->request->getPost();


            $file = $this->request->getFile('image');
            if ($file && $file->isValid() && !$file->hasMoved()) {

                $newName = $file->getRandomName();


                $targetPath = ROOTPATH . 'public/uploads/events/';


                if (!is_dir($targetPath)) {
                    mkdir($targetPath, 0755, true);
                }


                $file->move($targetPath, $newName);


                $data['image'] = base_url('uploads/events/' . $newName);
            } else {

                return $this->respond(['error' => 'Invalid or missing image file'], 400);
            }


            if ($this->model->insert($data)) {
                $response = [
                    'status' => 201,
                    'error' => null,
                    'message' => [
                        'success' => 'Event created successfully'
                    ]
                ];
                return $this->respondCreated($response);
            } else {

                return $this->respond($this->model->errors(), 400);
            }
        } catch (\Throwable $th) {

            return $this->failServerError('An error has occurred: ' . $th->getMessage());
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
                        'success' => 'Event updated successfully'
                    ]
                ];
                return $this->respond($response);
            } else {
                return $this->respond($this->model->errors(), 400);
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
                        'success' => 'Event deleted successfully'
                    ]
                ];
                return $this->respondDeleted($response);
            } else {
                return $this->respond($this->model->errors(), 400);
            }
        } catch (\Throwable $th) {
            return $this->failServerError('An error has occurred');
        }
    }





}