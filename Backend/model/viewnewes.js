const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('events', EventSchema);
