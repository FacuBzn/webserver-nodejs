 _Esta es una aplicacion web Desarrollada en Node js_, 
========================== 
    Para iniciar con el proyecto, se debe ingresar los sgtes comandos para crear las carpetas fundamentales como el package.json y packet-lock.json

**npm init -y => para crear el archivo package.json**
**npm i -y**
**npm i express y npm require "librerias principales"**

    para esta aplicacion web instalaremos handlebars.js de esta forma:

**npm install hbs**

    sirve para renderisar particiones de html que se repiten en las distintas paginas. para reutilizar codigo y que sea mas legible.

--------------------------

#### Para poder sumir al repositorio el proyecto se deben seguir los siguientes pasos

    * 1- comenzar con el git init
    * 2- luego git add . ( para que se agreguen todos los archivos)
    * 3- sgte git commit --m "mensaje o explicacion del commit" 
    * 4- git remote add origin https://github.com/Farsante/AppWeather-Geolocation. // comando + la url del repo
    * 5- git branch -M main
    * 6- git push -u origin main

    Se instala tambien las dependencias para capturar las variable de entorno, y asi poder levantar el servidor

**npm i dotenv**

agregar el comando start en el package.json para poder levantar la aplicacion como el sgte:

**"start": "node app.js"**


#### url de la pagina -> https://webservice-nodefbzn.herokuapp.com