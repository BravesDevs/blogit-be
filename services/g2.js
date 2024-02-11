const { G2 } = require("../db/models/G2");

const g2RegisterService = async (data) => {
  const g2 = new G2(data);
  await g2.save();
  return {
    g2,
  };
};

const fetchG2RegistrationsService = async () => {
  const g2 = await G2.find();
  return g2;
};

module.exports = { g2RegisterService, fetchG2RegistrationsService };
