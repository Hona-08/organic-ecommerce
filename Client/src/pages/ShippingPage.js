import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import AccountSidebar from "../components/AccountSidebar/AccountSidebar";
import CheckoutSteps from "../components/CheckoutSteps";
import Nav from "../components/HomeNavbar/HomeNav";
import { Row, Col, Button, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "../actions/cartAction";
import { useNavigate } from "react-router-dom";

const ShippingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productAddToCart = useSelector((state) => state.productAddToCart);
  const { shippingAddress } = productAddToCart;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmitShippinForm = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, email, phone }));
    navigate("/payment");
  };

  useEffect(() => {
    if (shippingAddress) {
      setAddress(shippingAddress.address);
      setCity(shippingAddress.city);
      setEmail(shippingAddress.email);
      setPhone(shippingAddress.phone);
    }
  }, []);
  return (
    <div>
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      <AccountSidebar show={show} setShow={setShow} />
      <Container className="mt-5">
        <FormContainer>
          <CheckoutSteps step1 step2 />
          <h1>Shipping</h1>
          <Form onSubmit={handleSubmitShippinForm}>
            <Form.Group controlId="address" className="mb-4 mt-4">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
                placeholder="Enter address"
                defaultValue={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="city" className="mb-4">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="city"
                placeholder="Enter city"
                defaultValue={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="postalCode" className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="country" className="mb-4">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="country"
                placeholder="Enter Contanct Number"
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="mb-4">
              Continue
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </div>
  );
};

export default ShippingPage;
