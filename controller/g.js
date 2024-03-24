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

    // If same date appointments are already present, return

    const existingAppointments = await Appointment.find({
      date: appointmentDate,
    });

    if (existingAppointments.length > 0) {
      res.send("Appointments already present for the given date");
      return;
    }

    // Generate appointments for the given date

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

const getAppointments = async (req, res, next) => {
  try {
    const { appointmentDate } = req.body;
    console.log(appointmentDate);
    const appointments = await Appointment.find({
      date: appointmentDate,
    });

    console.log(appointments);

    res.render("g2", {
      title: "G2",
      appointments: appointments || [],
      isLoggedIn: req.session.isLoggedIn || false,
      userType: req.session.userType,
    });
  } catch (error) {
    next(error);
  }
};

const bookAppointment = async (req, res, next) => {
  try {
    const { appointmentId } = req.body;

    await Appointment.updateOne(
      { _id: appointmentId },
      { $set: { user: req.session.user, isSlotAvailable: false } }
    );
    res.send("Appointment booked successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLicenseDetailsAPI,
  addAppointments,
  getAppointments,
  bookAppointment,
};
