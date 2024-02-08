import { g2RegisterService } from "../services/g2";

const g2RegisterAPI = async (req, res, next) => {
  const { body } = req;

  try {
    const { g2 } = await g2RegisterService(body);
    res.status(201).json(g2);
  } catch (error) {
    next(error);
  }
};

module.exports = { g2RegisterAPI };
