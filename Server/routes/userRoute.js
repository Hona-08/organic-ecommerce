const express = require("express");
const {
  getUsers,
  registerUsers,
  authUser,
} = require("../controllers/userController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, admin, getUsers).post(registerUsers);
router.route("/login").post(authUser);

module.exports = router;
