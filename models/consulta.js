const axios = require("axios");

const Episodio = require("./episodio");
const Personaje = require("./personaje");
const Lugar = require("./lugares");

class Consulta {
  get paramsRick() {
    return {
      status: "Alive",
    };
  }

  async getPersonaje() {
    try {
      const instance = axios.create({
        baseURL: "https://rickandmortyapi.com/api/character",
        params: this.paramsRick,
      });

      const resp = await instance.get();
      let listPersonajes = [];

      resp.data.results.forEach((e) => {
        const personaje = new Personaje(
          e.id,
          e.name,
          e.status,
          e.species,
          e.image
        );
        listPersonajes.push(personaje);
      });
      console.log(listPersonajes[1]);
      return listPersonajes;
    } catch (error) {
      throw error;
    }
  }

  async getEpisodios() {
    try {
      const instance = axios.create({
        baseURL: "https://rickandmortyapi.com/api/episode",
      });

      const resp = await instance.get();

      let listEpisodios = [];

      resp.data.results.forEach((e) => {
        const episodio = new Episodio(e.id, e.name, e.air_date, e.episode);
        listEpisodios.push(episodio);
      });

      console.log(listEpisodios[1]);
      return listEpisodios;
    } catch (error) {
      throw error;
    }
  }
  async getLocations() {
    try {
      const instance = axios.create({
        baseURL: "https://rickandmortyapi.com/api/location",
      });

      const resp = await instance.get();
      let listLugares = [];

      resp.data.results.forEach((e) => {
        const lugar = new Lugar(e.id, e.name, e.type, e.dimension, e.created);
        listLugares.push(lugar);
      });

      console.log(listLugares[1]);
      return listLugares;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Consulta;
