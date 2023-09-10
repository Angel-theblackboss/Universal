const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const clientSchema = mongoose.Schema({
  number: { type: String, required: true, unique: true, },
  password: { type: String, required: true },
  }
);
clientSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Client', clientSchema);