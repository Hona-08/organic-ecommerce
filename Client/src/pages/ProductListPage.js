import React, { useEffect, useState } from "react";
import Nav from "../components/HomeNavbar/HomeNav";
import { Table, Button, Row, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getProduct,
  getProducts,
} from "../actions/productAction";

const ProductListPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productAdd = useSelector((state) => state.productAdd);
  const { success } = productAdd;
  const productDelete = useSelector((state) => state.productDelete);
  const { success: deleteSuccess } = productDelete;
  const listProducts = useSelector((state) => state.listProducts);
  const { products } = listProducts;

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  const createProductHandler = () => {
    navigate("/admin/product/add");
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [success, deleteSuccess]);
  return (
    <div>
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      <Container>
        <Row className="align-items-center" style={{ marginTop: "20px" }}>
          <Col>
            <h1>Products</h1>
          </Col>
          <Col className="text-right">
            <Button className="py-3" onClick={createProductHandler}>
              <i className="fas fa-plus"></i> Create Product
            </Button>
          </Col>
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
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.uuid}>
                  <td>{product.uuid}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.sub_category}</td>
                  <td>
                    <LinkContainer
                      to={`/admin/product/update/${product.uuid}`}
                      // onClick={() => dispatch(getProduct(product.uuid))}
                    >
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => dispatch(deleteProduct(product.uuid))}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ProductListPage;
