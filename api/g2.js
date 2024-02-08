const { g2RegisterService } = require("../services/g2");
const g2RegisterAPI = async (req, res, next) => {
  const { body } = req;
  console.log(body);
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
      res.render("error", { title: "Error" });
    }

    const data = {
      firstName,
      lastName,
      licenseNo,
      carDetails: { age, make, model, year, platNo },
    };

    const { g2 } = await g2RegisterService(data);
    res.render("g2RegisterSuccess", { title: "Success" });
    g2RegisterSuccess;
  } catch (error) {
    next(error);
  }
};

module.exports = { g2RegisterAPI };
