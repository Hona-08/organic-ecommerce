import React, { useState, useEffect } from "react";
import { Button, Row, Col, ListGroup, Image } from "react-bootstrap";
import Message from "../components/Message";
import Nav from "../components/HomeNavbar/HomeNav";
import { Container } from "react-bootstrap";
import AccountSidebar from "../components/AccountSidebar/AccountSidebar";
import { useSelector, useDispatch } from "react-redux";
import {
  createOrders,
  deliverOrder,
  getOrder,
  payOrder,
} from "../actions/orderAction";
import { useNavigate, useParams, Link } from "react-router-dom";
import KhaltiCheckout from "khalti-checkout-web";

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { uuid } = useParams();
  const listOrder = useSelector((state) => state.listOrder);
  const { order } = listOrder;
  const userLoginState = useSelector((state) => state.userLogin);
  const { userInfo } = userLoginState;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { success: deliverSuccess } = orderDeliver;
  const orderPay = useSelector((state) => state.orderPay);
  const { success: paySuccess } = orderPay;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    dispatch(getOrder(uuid));
  }, [deliverSuccess, paySuccess]);

  let config = {
    // replace this key with yours
    publicKey: "live_public_key_5b4c9d3cf2984b0d8679042bbd6dc65d",
    productIdentity: "1234567890",
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
        dispatch(payOrder(uuid));
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  let checkout = new KhaltiCheckout(config);

  const successPaymentHandler = () => {
    // console.log("object");
    checkout.show({ amount: 1000 });
  };
  const handleOrderDeliver = () => {
    // console.log("object");
    dispatch(deliverOrder(uuid));
  };
  return (
    <div>
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      <AccountSidebar show={show} setShow={setShow} />
      <Container className="mt-5">
        <>
          {/* <h1>Order {order.uuid}</h1> */}
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Shipping</h2>
                  <p>
                    <strong>Name: </strong>
                    {userInfo && userInfo.name}
                  </p>
                  <p>
                    <a href={`mailto:${userInfo && userInfo.email}`}>
                      {userInfo && userInfo.email}
                    </a>
                  </p>
                  <p>
                    <strong>Address:</strong>{" "}
                    {order && JSON.parse(order.shippingAddress).address} ,
                    {order && JSON.parse(order.shippingAddress).city},{" "}
                    {order && JSON.parse(order.shippingAddress).email},{" "}
                    {order && JSON.parse(order.shippingAddress).phone}
                  </p>
                  {order && order.isDelivered ? (
                    <Message variant="success">
                      Delivered on {order && order.deliveredAt}
                    </Message>
                  ) : (
                    <Message variant="danger">Not Delivered</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Payment Method</h2>
                  <p>
                    <strong>Method:</strong> Khalti
                  </p>
                  {order && order.isPaid ? (
                    <Message variant="success">
                      Paid on {order && order.paidAt}
                    </Message>
                  ) : (
                    <Message variant="danger">Not Paid</Message>
                  )}
                </ListGroup.Item>

                <ListGroup.Item>
                  <h2>Order Items</h2>
                  {order && JSON.parse(order.orderItems).length === 0 ? (
                    <Message>Your Cart is Empty</Message>
                  ) : (
                    <ListGroup variant="flush">
                      {order &&
                        JSON.parse(order.orderItems).map((item, index) => (
                          <ListGroup.Item key={index}>
                            <Row>
                              <Col md={1}>
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  fluid
                                  rounded
                                />
                              </Col>
                              <Col>
                                <Link to={`/product/${item.product}`}>
                                  {item.name}
                                </Link>
                              </Col>
                              <Col md={4}>
                                {item.qty} x {item.price} ={" "}
                                {item.qty * item.price}
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        ))}
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Order Summery</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>Rs: {order && order.itemPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>Rs: {order && order.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>Rs: {order && order.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>Rs: {order && order.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>
                {userInfo && userInfo.isAdmin ? (
                  <ListGroup.Item>
                    <Button
                      className="btn btn-block"
                      onClick={handleOrderDeliver}
                      disabled={order && order.isDelivered ? true : false}
                    >
                      Mark Order As Deliver
                    </Button>
                  </ListGroup.Item>
                ) : (
                  <ListGroup.Item>
                    <Button
                      variant="dark"
                      className="btn btn-block"
                      onClick={successPaymentHandler}
                      disabled={order && order.isPaid ? true : false}
                    >
                      Pay
                    </Button>
                  </ListGroup.Item>
                )}
                {/* {!order && order.isPaid && (
                  <ListGroup.Item>
                    <Button
                      variant="dark"
                      className="btn btn-block"
                      onClick={successPaymentHandler}
                    >
                      Pay
                    </Button>
                  </ListGroup.Item>
                )} */}
                {/* {userInfo &&
                  userInfo.isAdmin &&
                  order &&
                  order.isPaid &&
                  !order &&
                  order.isDelivered && (
                    <ListGroup.Item>
                      <Button
                        className="btn btn-block"
                        onClick={handleOrderDeliver}
                      >
                        Mark Order As Deliver
                      </Button>
                    </ListGroup.Item>
                  )} */}
              </ListGroup>
            </Col>
          </Row>
        </>
      </Container>
    </div>
  );
};

export default OrderPage;
