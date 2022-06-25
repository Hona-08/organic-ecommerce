const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./env");

const generateToken = (uuid) => {
  return jwt.sign({ uuid }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { generateToken };
