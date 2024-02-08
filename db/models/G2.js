const mongoose = require("mongoose");
const { Schema } = mongoose;

const G2Schema = new Schema({
  firstName: String,
  lastName: String,
  licenseNo: String,
  age: Number,
  carDetails: {
    make: String,
    model: String,
    year: Number,
    platNo: String,
  },
});

const g2Model = mongoose.model("g2", G2Schema);

module.exports = { g2Model };
