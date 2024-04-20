const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  userType: String,
  level: {
    type: String,
    default: "G1"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
