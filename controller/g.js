const { fetchG2LicenseDetials } = require("../services/g2");
const ejs = require("ejs");

const { Appointment } = require("../db/models/Appointment");

const getLicenseDetailsAPI = async (req, res, next) => {
  try {
    const { licenseNo } = req.body;
    const g2Details = await fetchG2LicenseDetials(licenseNo);
    res.render("g", { title: "G", g2Details });
  } catch (error) {
    next(error);
  }
};

const addAppointments = async (req, res, next) => {
  try {
    const { appointmentDate } = req.body;

    const appointments = [];
    for (let i = 9; i < 14; i++) {
      appointments.push({
        date: appointmentDate,
        time: `${i}:00 - ${i}:30`,
      });
      appointments.push({
        date: appointmentDate,
        time: `${i}:30 - ${i + 1}:00`,
      });
    }

    // Add appointments to the database
    await Appointment.insertMany(appointments);

    res.send("Appointment added successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = { getLicenseDetailsAPI, addAppointments };
