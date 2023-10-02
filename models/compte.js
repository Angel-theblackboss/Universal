const mongoose = require('mongoose');

const compteSchema = mongoose.Schema({
  email: { type: String, required: true, unique: false },
  password: { type: String, required: true },
  }
);

module.exports = mongoose.model('Compte', compteSchema);