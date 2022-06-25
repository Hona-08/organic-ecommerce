"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      itemPrice: {
        type: Sequelize.STRING,
      },
      orderItems: {
        type: Sequelize.STRING(1000),
      },
      paymentMethod: {
        type: Sequelize.STRING,
      },
      shippingAddress: {
        type: Sequelize.STRING,
      },
      shippingPrice: {
        type: Sequelize.STRING,
      },
      taxPrice: {
        type: Sequelize.STRING,
      },
      totalPrice: {
        type: Sequelize.STRING,
      },
      isDelivered: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      deliveredAt: {
        type: Sequelize.DATE,
      },
      isPaid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      paidAt: {
        type: Sequelize.DATE,
      },
      userId: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
