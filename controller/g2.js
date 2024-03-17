const { g2RegisterService } = require("../services/g2");
const ejs = require("ejs");
const { hashData } = require("../common/helpers/helpers");
const g2RegisterAPI = async (req, res, next) => {
  const { body } = req;
  try {
    const { firstName, lastName, licenseNo, age, make, model, year, platNo } =
      body;

    if (
      !firstName ||
      !lastName ||
      !licenseNo ||
      !age ||
      !make ||
      !model ||
      !year ||
      !platNo
    ) {
      res.redirect("/");
    }

    const hashLicenseNumber = await hashData(licenseNo);

    const data = {
      firstName,
      lastName,
      licenseNo: hashLicenseNumber,
      carDetails: { age, make, model, year, platNo },
    };

    const { g2 } = await g2RegisterService(data);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
};

module.exports = { g2RegisterAPI };
