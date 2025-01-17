## Descripcion
El proyecto esta dividido en 2 secciones, el backend que es una api rest con laravel y el frontend el cual es un portal web en html y javascript que se consume los metodos de la api del backend para el manejo de un inventario de productos. 

Para la parte del backend se decidió utilizar laravel porque provee herramientas como son:
* Manejo de peticiones http
* Validación de datos en las peticiones
* Provee un ORM para manipular la base de datos
* Funciones para manejar las respuestas de la api

Esto permite un desarrollo mas rápido de un proyecto como lo es una api rest.

Para el frontend, decidí utilizar tailwind css para la parte de los estilos, con esto puedo enfocarme mas a la estructura del codigo html y evitar escribir codigo css desde 0, usando las clases que provee tailwind puedo maquetar de forma mas sencilla las vistas. 

## Instrucciones

### Backend
La maquina donde se va a ejecutar el proyecto debe tener instalado php en su version 8.2 y sqlite3
Clonar el proyecto de github https://github.com/flpespinoza/examen_fullstack en la terminal
```
git clone git@github.com:flpespinoza/examen_fullstack.git
```
Una vez clonado el proyecto, ingresar al directorio 'backend' y crear el archivo .env
```
cp .env.example .env
```
General el archivo database.sqlite dentro del directorio 'database'
```
cd database
touch database.sqlite
```
Aunque se proporciona un archivo init.sql en la raíz del proyecto con el codigo para crear la base de datos y las tablas, vamos a usar las migraciones y seeders de laravel para generar las tablas e ingresar datos de prueba. Ejecutamos en la terminal
```
php artisan migrate --seed
```

Para correr el servidor ejecutar en la terminar
```
php artisan serve
```

### Frontend
Se puede ejecutar abriendo directamente el archivo index.html en el navegador o desde visual studio code con la extension de live server


## Notas
El proyecto tiene muchas áreas de mejora como son:
* Validación de los datos en la api en FormRequests en los metodos create y update.
* Uso de servicios para las funciones CRUD, esto para que el controlador solo sea el responsable de recibir los datos y devolver las respuestas. Además el uso de servicios nos va a permitir reutilizar el codigo de las funciones en otras partes del sistema.
* Agrupar las rutas de la api
* En el frontend hacer uso de algun framework de javascript como vue o next.js