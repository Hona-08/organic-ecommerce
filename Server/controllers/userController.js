const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const { User } = require("../models");
const { generateToken } = require("../utils/generateToken");

// @des      Get All User
// @route    GET /api/user
// @Access   Private
const getUsers = asyncHandler(async (req, res) => {
  const user = await User.findAll();
  if (user) {
    res.json(user);
  } else {
    res.status(400);
    throw new Error("User Not Found");
  }
});

// @des      Register User
// @route    POST /api/user
// @Access   Public
const registerUsers = asyncHandler(async (req, res) => {
  const { name, address, email, password } = req.body;

  //   console.log(name, email, phone, address, password);

  const userExit = await User.findOne({
    where: {
      email,
    },
  });

  //   console.log(userExit);

  if (userExit) {
    res.status(400);
    throw new Error("User With This Email Already Exit");
  }

  const salt = await bcrypt.genSalt(10);

  const newUser = await User.create({
    name,
    address,
    email,
    password: await bcrypt.hash(password, salt),
  });

  if (newUser) {
    res.status(201);
    res.json({
      uuid: newUser.uuid,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken(newUser.uuid),
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

// @des      Auth User and Get Token
// @route    POST /api/user/login
// @Access   Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      uuid: user.uuid,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user.uuid),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { getUsers, registerUsers, authUser };
