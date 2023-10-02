const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path');
require('dotenv').config();

const mongoose = require('mongoose');
const clientRoutes = require('./router/client');
const compteRoutes = require('./router/compte');


mongoose.connect(process.env.MONGODB_URL.toString(),
  { useNewUrlParser: true,
    useUnifiedTopology: true }) 
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors());

app.use(express.json());//intercepte toutes les reexpress contenant du json et met son contenu à disposition 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/', clientRoutes);
app.use('/compte', compteRoutes);

module.exports = app;
  