# API Project - CodeIgniter 4

Este proyecto es una API construida con CodeIgniter 4, diseñada para proporcionar servicios a través de endpoints RESTful.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes elementos en tu sistema:

- **PHP** (versión 7.4 o superior)
- **Composer** (para la gestión de dependencias)
- **MySQL** o cualquier otro sistema de base de datos compatible.
- **Servidor web** (Apache, Nginx, etc.) configurado para manejar el directorio público `/public` de CodeIgniter.

---

## Configuración inicial

$ composer install
$ php spark serve

## Endpoints de la API

La API sigue una estructura RESTful y utiliza `ResourceController` para la gestión de recursos. A continuación, se listan los endpoints disponibles:

| **Método HTTP** | **Endpoint**       | **Controlador** | **Descripción**                                |
| --------------- | ------------------ | --------------- | ---------------------------------------------- |
| GET             | /event             | Event           | Obtener todos los eventos.                     |
| POST            | /event             | Event           | Crear un nuevo evento.                         |
| GET             | /event/{id}        | Event           | Obtener los detalles de un evento específico.  |
| PUT             | /event/{id}        | Event           | Actualizar un evento específico.               |
| DELETE          | /event/{id}        | Event           | Eliminar un evento específico.                 |
| GET             | /user              | User            | Obtener todos los usuarios.                    |
| POST            | /user              | User            | Crear un nuevo usuario.                        |
| GET             | /user/{id}         | User            | Obtener los detalles de un usuario específico. |
| PUT             | /user/{id}         | User            | Actualizar un usuario específico.              |
| DELETE          | /user/{id}         | User            | Eliminar un usuario específico.                |
| GET             | /registration      | Registration    | Obtener todas las inscripciones.               |
| POST            | /registration      | Registration    | Crear una nueva inscripción.                   |
| GET             | /registration/{id} | Registration    | Obtener los detalles de una inscripción.       |
| PUT             | /registration/{id} | Registration    | Actualizar una inscripción específica.         |
| DELETE          | /registration/{id} | Registration    | Eliminar una inscripción específica.           |

### Notas

1. **Base URL**: La API está configurada para ejecutarse en `http://localhost:8080`. Ajusta esto según sea necesario.
2. **Estructura RESTful**: Los endpoints son generados automáticamente al usar `ResourceController`. Asegúrate de haber configurado las rutas en `app/Config/Routes.php` como se muestra a continuación:

   ```php
   $routes->resource('events');
   $routes->resource('users');
   $routes->resource('registrations');
   ```
