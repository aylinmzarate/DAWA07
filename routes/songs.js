const express = require('express');
const router = express.Router();
const Song = require('../models/song');

// Manejar la solicitud GET para mostrar el formulario de agregar canciones
router.get('/agregar', (req, res) => {
  res.render('formulario');
});

// Manejar la solicitud POST para agregar una nueva canción
router.post('/agregar', (req, res) => {
  const { titulo, artista, genero, anio } = req.body;
  const nuevaCancion = new Song({ titulo, artista, genero, anio });
  nuevaCancion.save()
    .then(() => res.redirect('/canciones')) // Redirige a la página de canciones después de agregar la canción
    .catch(err => {
      console.log(err);
      res.status(500).send('Error al agregar la canción');
    });
});

// Manejar la solicitud GET para mostrar todas las canciones
router.get('/', (req, res) => {
  Song.find({})
    .then(canciones => {
      res.render('canciones', { canciones: canciones });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error al obtener las canciones');
    });
});

module.exports = router;
