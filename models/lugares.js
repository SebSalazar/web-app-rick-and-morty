class Lugares {
  id;
  nombre = "";
  tipo = "";
  dimension = "";
  fecha_creado = "";

  constructor(id, name, type, dimension, created = "") {
    this.id = id;
    this.nombre = name;
    this.tipo = type;
    this.dimension = dimension;
    this.episodio = created.split("T")[0];
  }
}

module.exports = Lugares;
