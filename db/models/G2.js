const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./User"); // Require the User schema/model

const g2Schema = new Schema({
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
  user: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to User schema
  },
});

const G2 = mongoose.model("G2", g2Schema);

module.exports = { G2 };
