# Node.js Multi-Server 
Este proyecto implementa un servidor básico en Node.js con diferentes versiones: un servidor simple, un servidor síncrono y un servidor asíncrono. Todas las versiones están disponibles a través de diferentes rutas. Además, el proyecto incluye la implementación de Docker para la fácil distribución y ejecución del servidor.

# Comenzando
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas. Este es un trabajo de programacion de plataformas emergentes de la UACH.

# Pre-requisitos
1. **Node.js**: Debes tener Node.js instalado en tu máquina para ejecutar el servidor localmente.
   
   Puedes verificar si está instalado con el siguiente comando:

        ```
        node -v
        ```
2. **Docker**: Si deseas ejecutar el servidor en un contenedor, asegúrate de tener Docker instalado.

    Verifica que Docker esté instalado correctamente:

        ```
        docker -v
        ```

# Instalacion
Sigue estos pasos para instalar y ejecutar el proyecto localmente:
1. Clona el repositorio:

    ```
    git clone https://github.com/LuisAceR/node-multi-server.git
    cd node-multi-server
    ```

2. Instala las dependencias de Node.js (si existen):

    ```
    npm install
    ```

3. Inicia el servidor:

    ```
    node server.js
    ```

# Acceso a las rutas del servidor
Una vez que el servidor está en ejecución, puedes acceder a las diferentes versiones del servidor a través de las siguientes rutas en tu navegador:

* Servidor Simple (Hola Mundo): http://localhost:3000/simple
* Servidor Síncrono (Lectura de archivo síncrona): http://localhost:3000/sincrono
* Servidor Asíncrono (Lectura de archivo asíncrona): http://localhost:3000/asincrono

# Ejecutar en Docker
Si prefieres ejecutar el proyecto en un contenedor Docker, sigue estos pasos

1. Construye la imagen de Docker:

    ```
    docker build -t node-multi-server .
    ```

2. Ejecuta el contenedor:

    ```
    docker run -p 3000:3000 node-multi-server
    ```

Una vez que el contenedor esté en ejecución, accede a las mismas rutas del servidor en tu navegador:

* Servidor Simple: http://localhost:3000/simple
* Servidor Síncrono: http://localhost:3000/sincrono
* Servidor Asíncrono: http://localhost:3000/asincrono

# Descripción de las rutas

1. **Servidor Simple**: Muestra un mensaje básico de "Hola Mundo".
2. **Servidor Síncrono**: Lee el contenido de archivo.txt de manera síncrona y lo devuelve como respuesta.
3. **Servidor Asíncrono**: Lee el contenido de archivo.txt de manera asíncrona y lo devuelve como respuesta.

# Ejecutando las pruebas
Este proyecto no incluye pruebas automatizadas. Para realizar pruebas manuales, puedes enviar solicitudes HTTP a las rutas mencionadas y verificar las respuestas.

# Despliegue
El proyecto puede desplegarse en cualquier servidor que soporte Docker. También puedes utilizar servicios de contenedores como AWS ECS, Google Cloud Run o Heroku con Docker.

# Construido con

* [Node.js](https://nodejs.org/en) Entorno de ejecución para JavaScript.
* [Docker](https://www.docker.com/) Plataforma de contenedores para aplicaciones.

# Contribuyendo
Las solicitudes de pull son bienvenidas.

# Versionado
Se utilizo Github para el versionado.

# Autores
Luis Acevedo 360777 - Trabajo inicial - [LuisAceR](https://github.com/LuisAceR)

# Licencia
Codigo abierto

# Agradecimientos
* Al profesor Oscar Daniel por la documentacion proporcionada.
* A la comunidad de Node.js por su documentación y ejemplos.
* A [PurpleBooth](https://gist.github.com/PurpleBooth) por la plantilla de README.


