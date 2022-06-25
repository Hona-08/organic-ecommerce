import React, { useEffect, useState } from "react";
import { Table, Button, Row, Col, Container } from "react-bootstrap";
import AccountSidebar from "../components/AccountSidebar/AccountSidebar";
import Nav from "../components/HomeNavbar/HomeNav";
import { DELETE_PRODUCT_RESET } from "../constants/productConstant";
import moment from "moment";
import { getOrders } from "../actions/orderAction";
import { deleteProduct, getProducts } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
const OrderListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listProducts = useSelector((state) => state.listProducts);
  const { loading, products } = listProducts;
  const productDelete = useSelector((state) => state.productDelete);
  const { success: productDeleteSuccess } = productDelete;
  const listOrders = useSelector((state) => state.listOrders);
  const { orders } = listOrders;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getOrders());
  }, []);
  return (
    <div>
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      <AccountSidebar show={show} setShow={setShow} />
      <Container className="mt-5">
        <Row className="align-items-center" style={{ marginTop: "20px" }}>
          <Col>
            <h1>Orders</h1>
          </Col>
          <Col className="text-right"></Col>
        </Row>
        <Table
          striped
          bordered
          hover
          responsive
          className="table-sm"
          style={{ marginTop: "20px" }}
        >
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>DETAIL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((value) => (
                <tr key={value.uuid}>
                  <td>{value.uuid}</td>
                  <td>{moment(value.createdAt).format("MMMM Do YYYY")}</td>
                  <td>Rs. {value.totalPrice}</td>
                  <td>
                    {value.isPaid ? (
                      moment(value.paidAt).format("MMMM Do YYYY")
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    {value.isDelivered ? (
                      moment(value.deliveredAt).format("MMMM Do YYYY")
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${value.uuid}`}>
                      <Button variant="light" className="btn-sm">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default OrderListPage;
