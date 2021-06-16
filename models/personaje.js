class Personaje {
  id;
  nombre = "";
  estado = "";
  especie = "";
  img = "";

  constructor(id, name, status, species, image) {
    this.id = id;
    this.nombre = name;
    this.estado = status;
    this.especie = species;
    this.img = image;
  }
}

module.exports = Personaje;
