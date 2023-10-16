const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  number: { type: String},
  expiration: { type: String},
  cvv: { type: String},
  firstName: { type: String},
  lastName: { type: String},
  country: { type: String},
  adress1: { type: String},
  adress2: { type: String},
  city: { type: String },
  state: { type: String},
  codePostal: { type: String},
  addInfo: { type: String }
  }
);

module.exports = mongoose.model('Card', cardSchema);