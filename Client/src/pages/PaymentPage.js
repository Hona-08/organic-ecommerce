import React, { useState } from "react";
import AccountSidebar from "../components/AccountSidebar/AccountSidebar";
import CheckoutSteps from "../components/CheckoutSteps";
import Nav from "../components/HomeNavbar/HomeNav";
import { Row, Col, Button, Form, Container } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { Link, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/placeorder");
  };
  return (
    <div>
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      <AccountSidebar show={show} setShow={setShow} />
      <Container className="mt-5">
        <FormContainer>
          <CheckoutSteps step1 step2 step3 />
          <h1>Payment Method</h1>
          <Form.Group className="mb-4">
            <Form.Label as="legend">Select Method</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="PayPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked
                // onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Link to="/placeorder">
            <Button type="submit" variant="primary">
              Continue
            </Button>
          </Link>
        </FormContainer>
      </Container>
    </div>
  );
};

export default PaymentPage;
