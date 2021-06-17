const express = require("express");
var hbs = require("hbs");

const app = express();
const Consulta = require("./models/consulta");
const port = 8080;

// --- Consultas API Rick and Morty
const personajes = async () => {
  const consultas = new Consulta();
  const resp = await consultas.getPersonaje();
};

const lugares = async () => {
  const consultas = new Consulta();
  const resp = await consultas.getLocations();
};

const episodios = async () => {
  const consultas = new Consulta();
  return await consultas.getEpisodios();
};

// --- Handlebars ---
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// --- Servir contenido estatico ---
app.use(express.static("public"));

// --- Controlador del Handlebar ---
app.get("/", (req, res) => {
  episodios().then((val) => {
    res.render("home", {
      titulo: "RickAndMorty",
      nombre: "Todo sobre Rick and Morty",
      listEpisodios: [
        {
          id: val[0].id,
          nombre: val[0].nombre,
          fecha_aire: val[0].fecha_al_aire,
          episodio: val[0].episodio,
        },
        {
          id: val[5].id,
          nombre: val[5].nombre,
          fecha_aire: val[5].fecha_al_aire,
          episodio: val[5].episodio,
        },
        {
          id: val[10].id,
          nombre: val[10].nombre,
          fecha_aire: val[10].fecha_al_aire,
          episodio: val[10].episodio,
        },
        {
          id: val[18].id,
          nombre: val[18].nombre,
          fecha_aire: val[18].fecha_al_aire,
          episodio: val[18].episodio,
        },
      ],
    });
  });
});

app.get("/personajes", (req, res) => {
  res.render("personajes", {
    titulo: "RickAndMorty",
    nombre: "Todo sobre Rick and Morty",
  });
});

app.get("/locations", (req, res) => {
  res.render("locations", {
    titulo: "RickAndMorty",
    nombre: "Todo sobre Rick and Morty",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port);
