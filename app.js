const express = require("express");
var hbs = require('hbs');

const app = express();
const Consulta = require('./models/consulta');
const port = 8080;

// --- Consultas API Rick and Morty
const personajes = async () => {
  const consultas =  new Consulta();
  const resp = await consultas.getPersonaje();
}

// --- Handlebars ---
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// --- Servir contenido estatico ---
app.use(express.static("public"));

// --- Controlador del Hanledbar ---
app.get("/", (req, res) => {
  personajes();
  res.render('home', {
    titulo: 'RickAndMorty',
    nombre: 'Todo sobre Rick and Morty',
  });
});

app.get("/favoritos", (req, res) => {
  res.render('favoritos', {
    titulo: 'RickAndMorty',
    nombre: 'Todo sobre Rick and Morty',
  });
});

app.get("/remedios", (req, res) => {
  res.render('remedios', {
    titulo: 'RickAndMorty',
    nombre: 'Todo sobre Rick and Morty',
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port);
