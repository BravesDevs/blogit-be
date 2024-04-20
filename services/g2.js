const { G2 } = require("../db/models/G2");
const { Appointment } = require("../db/models/Appointment");
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
        date: d.date,
        time: d.time,
        user: d.user.email,
      });
    }
  });
  return appointments;
};

module.exports = {
  g2RegisterService,
  fetchG2RegistrationsService,
  fetchG2LicenseDetials,
  fetchTestUsersData
};

