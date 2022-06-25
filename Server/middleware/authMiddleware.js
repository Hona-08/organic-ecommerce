const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { User } = require("../models");
const { JWT_SECRET } = require("../utils/env.js");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  const request = req.headers.authorization;
  if (request && request.startsWith("Bearer")) {
    try {
      token = request.split(" ")[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = await User.findOne({
        where: {
          uuid: decoded.uuid,
        },
      });
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized, Token Failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No Token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized as an admin");
  }
};

module.exports = { protect, admin };
