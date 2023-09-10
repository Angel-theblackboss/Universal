const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path');

const mongoose = require('mongoose');
const clientRoutes = require('./router/client');



mongoose.connect('mongodb+srv://Angel:Le24jan2022.@universal.btl7smq.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true }) 
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Définir le dossier public où se trouve votre fichier index.html
app.use(express.static(path.join(__dirname, 'public')));

// Gérer les requêtes à la racine en renvoyant le fichier index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(cors());

app.use(express.json());//intercepte toutes les reexpress contenant du json et met son contenu à disposition 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/client', clientRoutes);

module.exports = app;
  