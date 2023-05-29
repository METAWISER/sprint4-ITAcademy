# REST API  
Esta es una API que contiene varios endpoints implementados utilizando Express.

A continuación se describen los ejercicios y funcionalidades implementadas:

## Nivel 1
### Ejercicio 1
Crea un servidor con Express que responda a una petición GET en el endpoint /user y devuelva un JSON con tu nombre, edad y la URL desde donde se realiza la petición.

### Ejercicio 2
Se ha añadido un nuevo endpoint /upload que permite subir archivos al servidor mediante una petición POST. El servidor aceptará archivos de tipo PNG, JPG o GIF. Si el archivo tiene una extensión diferente, se devolverá un mensaje de error.

## Nivel 2
### Ejercicio 1
Se ha creado un nuevo endpoint /time que recibe una solicitud POST con un parámetro JSON que contiene el nombre de usuario. El servidor responderá con un objeto JSON que contiene la hora y fecha actual. Además, se ha incluido un middleware que añade la cabecera Cache-control: no-cache a la respuesta y se ha habilitado el CORS (Cross-Origin Resource Sharing) para permitir solicitudes desde otros dominios.

### Ejercicio 2
Se ha agregado un middleware al endpoint anterior. Este middleware verifica si la cabecera de la petición contiene autenticación básica (usuario y contraseña). Si la cabecera de autenticación no está presente, el servidor devolverá un HTTP Status 401 - Unauthorized.

Adicionalmente, se ha utilizado Cucumber y Supertest para realizar pruebas automatizadas de la API.

## Instrucciones de instalación

Sigue los siguientes pasos para instalar las dependencias requeridas:

1. Asegúrate de tener Node.js instalado en tu sistema. Puedes descargar la última versión estable de Node.js desde su sitio web oficial.

2. Abre una terminal en la carpeta raíz de tu proyecto.

3. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```
Una vez que hayas instalado las dependencias, puedes utilizar los siguientes comandos:

```bash
npm run dev
``` 
Inicia el servidor en modo de desarrollo utilizando ts-node-dev.

```bash
npm run test
```
Ejecuta los casos de prueba utilizando Jest.

```bash 
npm run test:feature
```
Ejecuta las pruebas de características utilizando Cucumber.
```bash 
npm run build
```
Compila el código TypeScript y genera una carpeta dist con los archivos JavaScript compilados.
```bash 
npm start
```
Inicia el servidor utilizando los archivos JavaScript compilados en la carpeta dist.

```bash
npm run watch
```
Observa los cambios en los archivos TypeScript y reinicia automáticamente el servidor.

Recuerda ejecutar estos comandos desde una terminal en la carpeta raíz de tu proyecto.

### FIN