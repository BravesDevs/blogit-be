const bcrypt = require('bcryptjs');
const hashData = async (data) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(data, salt);
    return hash;
};

module.exports = { hashData };