const { g2RegisterService } = require("../services/g2");
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
      res.status(400).json({ message: "All fields are required" });
    }

    const data = {
      firstName,
      lastName,
      licenseNo,
      carDetails: { age, make, model, year, platNo },
    };

    const { g2 } = await g2RegisterService(data);
    res.status(201).json(g2);
  } catch (error) {
    next(error);
  }
};

module.exports = { g2RegisterAPI };
