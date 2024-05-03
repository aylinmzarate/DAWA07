const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  titulo: String,
  artista: String,
  genero: String,
  anio: Number
});

module.exports = mongoose.model('Song', songSchema);
