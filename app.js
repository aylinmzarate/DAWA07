const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const songRoutes = require('./routes/songs');

const app = express();

mongoose.connect('mongodb://localhost/musicaDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/canciones', songRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
