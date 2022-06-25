import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AccountSidebar from "../components/AccountSidebar/AccountSidebar";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";
import Nav from "../components/HomeNavbar/HomeNav";
import { useSelector, useDispatch } from "react-redux";
import { Button, Row, Col, ListGroup, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import { createOrders } from "../actions/orderAction";

const PlaceOrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productAddToCart = useSelector((state) => state.productAddToCart);
  const { shippingAddress, cartItem } = productAddToCart;
  const userLogin = useSelector((state) => state.userLogin);
  const createOrdersState = useSelector((state) => state.createOrders);
  const { success, orders } = createOrdersState;
  const { userInfo } = userLogin;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  // calculate prices
  productAddToCart.itemsPrice = cartItem
    .reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  productAddToCart.shippingPrice = productAddToCart.itemsPrice > 100 ? 0 : 100;

  productAddToCart.taxPrice = addDecimals(
    Number((0.15 * productAddToCart.itemsPrice).toFixed(2))
  );

  productAddToCart.totalPrice = (
    Number(productAddToCart.itemsPrice) +
    Number(productAddToCart.shippingPrice) +
    Number(productAddToCart.taxPrice)
  ).toFixed(2);

  const plcaeOrderHandler = () => {
    dispatch(
      createOrders({
        itemPrice: productAddToCart.itemsPrice,
        orderItems: JSON.stringify(cartItem),
        paymentMethod: "khalti",
        shippingAddress: JSON.stringify(shippingAddress),
        shippingPrice: productAddToCart.shippingPrice,
        taxPrice: productAddToCart.taxPrice,
        totalPrice: productAddToCart.totalPrice,
        userId: userInfo.uuid,
      })
    );
  };

  useEffect(() => {
    if (success) {
      navigate(`/order/${orders.uuid}`);
    }
  }, [success]);
  return (
    <div>
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      <AccountSidebar show={show} setShow={setShow} />
      <Container className="mt-5">
        <CheckoutSteps step1 step2 step3 step4 />
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Shipping</h2>
                <p>
                  <strong>Address:</strong> {shippingAddress.address} ,
                  {shippingAddress.city}, {shippingAddress.email},{" "}
                  {shippingAddress.phone}
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Payment Method</h2>
                <p>
                  <strong>Method:</strong> Khalti
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Order Items</h2>
                {cartItem.length === 0 ? (
                  <Message>Your Cart is Empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {cartItem.map((item, index) => (
                      <ListGroup.Item key={"index"}>
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
                              {"item.name"}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x {item.price} = {item.qty * item.price}
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
                  <Col>Rs: {productAddToCart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>Rs: {productAddToCart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>Rs: {productAddToCart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>Rs: {productAddToCart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {/* {error && <Message variant="danger">{error}</Message>} */}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItem.length === 0}
                  onClick={plcaeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlaceOrderPage;
