const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const requiredNumber = {
  type: Number,
  required: true,
};

const logEntrySchema = new Schema({
  title: {
    type: String,
    reuired: true,
  },
  description: String,
  comments: String,
  image: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0,
  },
  latitude: requiredNumber,
  longitude: requiredNumber,
  visitDate: {
    requied: true,
    type: Date,
  },
}, {
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
