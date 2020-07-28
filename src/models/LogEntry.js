const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requiredNumber = {
  type: Number,
  required: true,
};

const logEntrySchema = Schema({
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
  latitude: {
    ...requiredNumber,
    min: -90,
    max: 90,
  },
  longitude: {
    ...requiredNumber,
    min: -180,
    max: 180,
  },
  visitDate: {
    requied: true,
    type: Date,
  },
}, {
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = LogEntry;
