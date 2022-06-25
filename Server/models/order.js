"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      itemPrice: {
        type: DataTypes.STRING,
      },
      orderItems: DataTypes.STRING,
      paymentMethod: DataTypes.STRING,
      shippingAddress: DataTypes.STRING,
      shippingPrice: DataTypes.STRING,
      taxPrice: DataTypes.STRING,
      totalPrice: DataTypes.STRING,
      isDelivered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deliveredAt: {
        type: DataTypes.DATE,
      },
      isPaid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      paidAt: {
        type: DataTypes.DATE,
      },
      userId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
