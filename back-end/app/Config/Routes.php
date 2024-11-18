<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->resource('event');
$routes->resource('user');
$routes->resource('registration');

$routes->post('auth/register', 'Auth::register');
$routes->post('auth/login', 'Auth::login');