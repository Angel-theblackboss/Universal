const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path');
require('dotenv').config();

const mongoose = require('mongoose');
const clientRoutes = require('./router/client');
const compteRoutes = require('./router/compte');
const cardRoutes = require('./router/card');

mongoose.connect("mongodb+srv://Angel:Le24jan2022.@universal.btl7smq.mongodb.net/?retryWrites=true&w=majority",
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
app.use('/card', cardRoutes);

module.exports = app;
  
