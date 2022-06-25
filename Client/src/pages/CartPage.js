import React, { useState, useEffect } from "react";
import Nav from "../components/HomeNavbar/HomeNav";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../utils/env";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../actions/cartAction";
import AccountSidebar from "../components/AccountSidebar/AccountSidebar";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const productAddToCart = useSelector((state) => state.productAddToCart);
  const { cartItem } = productAddToCart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, success } = userLogin;

  const handleAddToCart = (uuid, qty) => {
    console.log("id", uuid);
    dispatch(addToCart(uuid, qty));
  };

  const checkoutHandler = () => {
    if (userInfo) {
      console.log("first");
      navigate("/shipping");
    } else {
      console.log("second");
      setShow(false);
    }
  };

  useEffect(() => {
    if (success) {
      setShow(true);
    }
  }, [success]);
  return (
    <div>
      {" "}
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      <AccountSidebar show={show} setShow={setShow} />
      <Container>
        <Row className="mt-5">
          <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItem && cartItem.length === 0 ? (
              <Alert variant={"info"}>
                Your Cart is Empty <Link to="/">Back</Link>{" "}
              </Alert>
            ) : (
              <ListGroup variant="flush" className="mt-4">
                {cartItem.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row style={{ alignItems: "center" }}>
                      <Col md={2}>
                        <Image
                          src={`${url}${item.image}`}
                          alt="image"
                          fluid
                          rounded
                          style={{ width: "65px" }}
                        />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>Rs: {item.price}</Col>
                      <Col md={2}>
                        <Form.Control
                          as="select"
                          defaultValue={item.qty}
                          onChange={(e) =>
                            handleAddToCart(
                              item.product,
                              Number(e.target.value)
                            )
                          }
                        >
                          {/* {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))} */}
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => dispatch(removeToCart(item.product))}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal (
                    {cartItem.reduce((acc, item) => acc + item.qty, 0)}) Items
                  </h3>
                  Rs:{" "}
                  {cartItem
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={cartItem.length === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed To Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;
