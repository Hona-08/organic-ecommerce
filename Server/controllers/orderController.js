const asyncHandler = require("express-async-handler");
const { Order } = require("../models");

// @des      Get All Order
// @route    GET /api/order
// @Access   Public
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.findAll();
  if (orders) {
    res.json(orders);
  } else {
    res.status(400);
    throw new Error("orders Not Found");
  }
});

// @des      Get Order
// @route    GET /api/order/:uuid
// @Access   Public
const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findOne({
    where: {
      uuid: req.params.uuid,
    },
  });
  if (order) {
    res.json(order);
  } else {
    res.status(400);
    throw new Error("order Not Found");
  }
});

// @des      Create Order
// @route    POST /api/order
// @Access   Public
const addOrder = asyncHandler(async (req, res) => {
  const {
    itemPrice,
    orderItems,
    paymentMethod,
    shippingAddress,
    shippingPrice,
    taxPrice,
    totalPrice,
    userId,
  } = req.body;
  const newOrder = await Order.create({
    itemPrice,
    orderItems,
    paymentMethod,
    shippingAddress,
    shippingPrice,
    taxPrice,
    totalPrice,
    userId,
  });
  if (newOrder) {
    res.status(201);
    res.json(newOrder);
  } else {
    res.status(400);
    throw new Error("Invalid Order Data");
  }
});

// @desc    Update Order to Pay
// @route   PUT /api/orders/:uuid/pay
// access   Private
const updateOrderToPay = asyncHandler(async (req, res) => {
  const order = await Order.findOne({
    where: {
      uuid: req.params.uuid,
    },
  });

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(400);
    throw new Error(`order with id:${req.params.id} is not found`);
  }
});

// @desc    Update Order to Delivered
// @route   PUT /api/orders/:uuid/deliver
// access   Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findOne({
    where: {
      uuid: req.params.uuid,
    },
  });

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(400);
    throw new Error(`order with id:${req.params.id} is not found`);
  }
});

module.exports = {
  getOrders,
  addOrder,
  getOrder,
  updateOrderToPay,
  updateOrderToDelivered,
};
