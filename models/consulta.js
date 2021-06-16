const axios = require("axios");

class Consulta {
  get paramsRick() {
    return {
      status: "dead",
    };
  }

  async getPersonaje() {
    try {
      const instance = axios.create({
        baseURL: "https://rickandmortyapi.com/api/character",
        params: this.paramsRick,
      });

      const resp = await instance.get();
      let result = [];

      resp.data.results.forEach((e) => {
        result.push({
          id: e.id,
          nombre: e.name,
          especie: e.species,
          locacion: e.location.name,
          img: e.image,
        });
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Consulta;
