class Episodio {
  id;
  nombre = "";
  fecha_al_aire = "";
  episodio = "";

  constructor(id, name, air_date, episode) {
    this.id = id;
    this.nombre = name;
    this.fecha_al_aire = air_date;
    this.episodio = episode;
  }
}

module.exports = Episodio;
