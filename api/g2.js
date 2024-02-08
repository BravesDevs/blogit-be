const { g2RegisterService } = require("../services/g2");
const ejs = require("ejs");

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
      res.redirect("/error");
    }

    const data = {
      firstName,
      lastName,
      licenseNo,
      carDetails: { age, make, model, year, platNo },
    };

    const { g2 } = await g2RegisterService(data);
    res.redirect("/error");
  } catch (error) {
    next(error);
  }
};

module.exports = { g2RegisterAPI };
