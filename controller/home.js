const path = require("path");

const ejs = require("ejs");
const { fetchG2RegistrationsService, fetchTestUsersData, userTestPassService } = require("../services/g2");

const index = async (req, res, next) => {
  // Get the License Registrations of G2
  try {
    let g2Registrations = await fetchG2RegistrationsService();
    res.render("index", {
      title: "Dashboard",
      g2Registrations,
      isLoggedIn: req.session.isLoggedIn || false,
      userType: req.session.userType,
    });
  } catch (err) {
    res.render("error", { title: "Error" });
  }
};

const login = (req, res, next) => {
  res.render("login", { title: "Login" });
};

const register = (req, res, next) => {
  res.render("signup", { title: "Register" });
};

const g2 = (req, res, next) => {
  res.render("g2", {
    title: "G2",
    appointments: [],
    isLoggedIn: req.session.isLoggedIn || false,
    userType: req.session.userType,
  });
};

const g = async (req, res, next) => {
  if (req.session.isLoggedIn) {
    let data = await fetchG2RegistrationsService(req.session.user);
    console.log(data);
    res.render("g", {
      title: "G",
      g2Details: data,
      isLoggedIn: req.session.isLoggedIn || false,
      userType: req.session.userType,
    });
    return;
  }

  res.render("g", {
    title: "G",
    g2Details: "",
    isLoggedIn: req.session.isLoggedIn || false,
    userType: req.session.userType,
  });
};

const error = (req, res, next) => {
  res.render("error", { title: "Error" });
};

const appointment = (req, res, next) => {
  res.render("appointment", { title: "Appointment" });
};

const tests = async (req, res, next) => {
  const data = await fetchTestUsersData();

  res.render("tests", {
    data: data || [], title: "Tests", isLoggedIn: req.session.isLoggedIn || false,
    userType: req.session.userType,
  });
};

const testFail = async (req, res, next) => {
  return res.status(200).json({ message: "Test Failed" });
};

const testPass = async (req, res, next) => {
  const userId = req.params.id;
  await userTestPassService(userId);
  const data = await fetchTestUsersData();
  res.render("tests", {
    data: data || [], title: "Tests", isLoggedIn: req.session.isLoggedIn || false,
    userType: req.session.userType,
  });

};

module.exports = {
  index,
  login,
  g2,
  g,
  error,
  register,
  appointment,
  tests,
  testFail,
  testPass
};
