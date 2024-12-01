const mongoose = require('mongoose');


const companiesSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imagePath: {
    type: String,
    default: '',
  }
});

module.exports = mongoose.model('Company', companiesSchema);
