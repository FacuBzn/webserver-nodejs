require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine','hbs');
hbs.registerPartials( __dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

// Rutas de la pagina
app.get('/',  (req, res) => {
    res.render( 'home',{
        nombre:'Facu Bzn',
        titulo:'Curso de Node js'
    });
});

app.get('/generic',  (req, res) => {
    res.render( 'generic');
});

app.get('/elements',  (req, res) => {
    res.render('elements');
});

app.get('*',  (req, res) => {
    res.render('404');
});
 
/* app.listen(8080) */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})