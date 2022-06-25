const express = require("express");
const router = express.Router();

const {
  getOrders,
  addOrder,
  getOrder,
  updateOrderToPay,
  updateOrderToDelivered,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getOrders).post(addOrder);
router.route("/:uuid").get(getOrder);
router.route("/:uuid/pay").put(protect, updateOrderToPay);
router.route("/:uuid/deliver").put(protect, updateOrderToDelivered);

module.exports = router;
