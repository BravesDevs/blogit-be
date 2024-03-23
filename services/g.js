const { Appointment } = require("../db/models/Appointment");

const generateAppointmentService = async (date) => {
  console.log(date);
  const appointments = [];
  for (let i = 9; i < 14; i++) {
    appointments.push({
      date: date,
      time: `${i}:00 - ${i}:30`,
    });
    appointments.push({
      date: date,
      time: `${i}:30 - ${i + 1}:00`,
    });
  }

  await Appointment.insertMany(appointments);

  return "Appointment added successfully";
};

module.exports = { generateAppointmentService };
