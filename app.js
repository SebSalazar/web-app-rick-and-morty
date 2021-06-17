const express = require("express");
var hbs = require("hbs");

const app = express();
const Consulta = require("./models/consulta");
const port = 8080;

// --- Consultas API Rick and Morty
const personajes = async () => {
  const consultas = new Consulta();
  return await consultas.getPersonaje();
};

const lugares = async () => {
  const consultas = new Consulta();
  return await consultas.getLocations();
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
  episodios()
    .then((val) => {
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
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/personajes", (req, res) => {
  personajes()
    .then((val) => {
      res.render("personajes", {
        titulo: "RickAndMorty",
        nombre: "Todo sobre Rick and Morty",
        listPersonajes: [
          {
            id: val[0].id,
            nombre: val[0].nombre,
            estado: val[0].estado,
            tipo: val[0].especie,
            img: val[0].img,
          },
          {
            id: val[1].id,
            nombre: val[1].nombre,
            estado: val[1].estado,
            tipo: val[1].especie,
            img: val[1].img,
          },
          {
            id: val[2].id,
            nombre: val[2].nombre,
            estado: val[2].estado,
            tipo: val[2].especie,
            img: val[2].img,
          },
          {
            id: val[3].id,
            nombre: val[3].nombre,
            estado: val[3].estado,
            tipo: val[3].especie,
            img: val[3].img,
          },
          {
            id: val[4].id,
            nombre: val[4].nombre,
            estado: val[4].estado,
            tipo: val[4].especie,
            img: val[4].img,
          },
          {
            id: val[5].id,
            nombre: val[5].nombre,
            estado: val[5].estado,
            tipo: val[5].especie,
            img: val[5].img,
          },
          {
            id: val[6].id,
            nombre: val[6].nombre,
            estado: val[6].estado,
            tipo: val[6].especie,
            img: val[6].img,
          },
          {
            id: val[7].id,
            nombre: val[7].nombre,
            estado: val[7].estado,
            tipo: val[7].especie,
            img: val[7].img,
          },
          {
            id: val[8].id,
            nombre: val[8].nombre,
            estado: val[8].estado,
            tipo: val[8].especie,
            img: val[8].img,
          },
          {
            id: val[9].id,
            nombre: val[9].nombre,
            estado: val[9].estado,
            tipo: val[9].especie,
            img: val[9].img,
          },
          {
            id: val[10].id,
            nombre: val[10].nombre,
            estado: val[10].estado,
            tipo: val[10].especie,
            img: val[10].img,
          },
          {
            id: val[11].id,
            nombre: val[11].nombre,
            estado: val[11].estado,
            tipo: val[11].especie,
            img: val[11].img,
          },
        ],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/locations", (req, res) => {
  lugares()
    .then((val) => {
      res.render("locations", {
        titulo: "RickAndMorty",
        nombre: "Todo sobre Rick and Morty",
        listLocaciones: [
          {
            id: val[0].id,
            nombre: val[0].nombre,
            tipo: val[0].tipo,
            dimension: val[0].dimension,
            fecha_creado: val[0].fecha_creado,
          },
          {
            id: val[1].id,
            nombre: val[1].nombre,
            tipo: val[1].tipo,
            dimension: val[1].dimension,
            fecha_creado: val[1].fecha_creado,
          },
          {
            id: val[2].id,
            nombre: val[2].nombre,
            tipo: val[2].tipo,
            dimension: val[2].dimension,
            fecha_creado: val[2].fecha_creado,
          },
        ],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port);
