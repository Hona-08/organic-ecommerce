import React, { useState, useEffect } from "react";
import AccountSidebar from "../components/AccountSidebar/AccountSidebar";
import Nav from "../components/HomeNavbar/HomeNav";
import Sidebar from "../components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getProduct } from "../actions/productAction";
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  Row,
  Form,
} from "react-bootstrap";
import { addToCart } from "../actions/cartAction";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { uuid } = useParams();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, success } = userLogin;
  const listProduct = useSelector((state) => state.listProduct);
  const { product } = listProduct;
  const [open, setOpen] = useState(false); //We set the initial state to false, because our menu should be hidden when the application is rendered.  here, setOpen is a function and you can change the value of this

  const [show, setShow] = useState(true);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (success) {
      setShow(true);
    }
    dispatch(getProduct(uuid));
  }, [success]);

  const addToCartHandler = () => {
    dispatch(addToCart(uuid, qty));
    navigate(`/cart`);
  };
  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      {/*this won't work again, because we havenot pass it to actual nav. We have just put it here for indicating that this accept these values */}
      <AccountSidebar show={show} setShow={setShow} />
      <div class="container">
        <Link to="/" className="btn btn-light my-3">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image
              src={product && product.image}
              alt={product && product.name}
              fluid
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product && product.name}</h3>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <Rating
                  value={product&&product.rating}
                  text={`${product&&product.numReviews} Reviews`}
                />
              </ListGroup.Item> */}
              <ListGroup.Item>
                Price:{" "}
                <span style={{ fontWeight: "bold" }}>
                  Rs{product && product.price}
                </span>{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product && product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>Rs: {product && product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {/* {product&&product.countInStock > 0 ? "In Stock" : "Out Of Stock"} */}
                      In Stock
                    </Col>
                  </Row>
                </ListGroup.Item>

                {/* {product.countInStock > 0 && ( */}
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(10).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {/* )} */}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="btn btn-block"
                    type="button"
                    // disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
              <Col></Col>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetailPage;
