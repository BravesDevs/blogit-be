const { G2 } = require("../db/models/G2");
const { Appointment } = require("../db/models/Appointment");
const { User } = require("../db/models/User");
const g2RegisterService = async (data) => {
  const g2 = new G2(data);
  await g2.save();
  return {
    g2,
  };
};

const fetchG2RegistrationsService = async (user_id) => {
  const g2 = await G2.findOne({ user: user_id })
    .select("firstName lastName licenseNo carDetails")
    .exec();
  return g2;
};

const fetchG2LicenseDetials = async (licenseNo) => {
  return await G2.findOne({ licenseNo });
};

const fetchTestUsersData = async () => {
  const data = await Appointment.find({}).populate("user").exec();
  let appointments = [];
  data.forEach((d) => {
    if (d.user) {
      appointments.push({
        id: d._id,
        userId: d.user._id,
        date: d.date,
        time: d.time,
        user: d.user.email,
      });
    }
  });
  return appointments;
};

const userTestPassService = async (userId) => {
  console.log(userId);
  await Appointment.deleteMany({ user: userId }).exec();
  const user = await User.findById(userId).exec();
  let level = "";
  if (user.level === "G1") {
    level = "G2";
  } else if (user.level === "G2") {
    level = "G";
  }
  await User.findOneAndUpdate({ _id: userId }, { level }).exec();
};

module.exports = {
  g2RegisterService,
  fetchG2RegistrationsService,
  fetchG2LicenseDetials,
  fetchTestUsersData,
  userTestPassService
};

