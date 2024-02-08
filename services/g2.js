import { G2 } from "../services/g2";

const g2RegisterService = async (data) => {
  const g2 = new G2(data);
  await g2.save();
  return {
    g2,
  };
};

module.exports = { g2RegisterService };
