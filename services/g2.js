const { G2 } = require("../db/models/G2");

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

module.exports = {
  g2RegisterService,
  fetchG2RegistrationsService,
  fetchG2LicenseDetials,
};

