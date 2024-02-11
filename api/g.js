const { fetchG2LicenseDetials } = require("../services/g2");
const ejs = require("ejs");

const getLicenseDetailsAPI = async (req, res, next) => {
  try {
    const { licenseNo } = req.body;
    const g2Details = await fetchG2LicenseDetials(licenseNo);
    res.render("g", { title: "G", g2Details });
  } catch (error) {
    next(error);
  }
};

module.exports = { getLicenseDetailsAPI };
