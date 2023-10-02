const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  number: { type: String, required: true},
  password: { type: String, required: true },
  }
);

module.exports = mongoose.model('Client', clientSchema);