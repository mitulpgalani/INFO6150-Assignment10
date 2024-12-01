const mongoose = require('mongoose');


const jobsSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        trim: true
      },
      jobTitle: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true,
        trim: true
      },
      salary: {
        type: Number,
        required: true
      }
});

module.exports = mongoose.model('Jobs', jobsSchema);
