const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  id: String,
  date: String,
  time: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  isSlotAvailable: {
    type: Boolean,
    default: true,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = { Appointment };
