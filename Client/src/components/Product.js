import React from "react";
import { Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import { url } from "../utils/env";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (uuid, qty) => {
    console.log("id", uuid);
    dispatch(addToCart(uuid, qty));
  };
  return (
    <Card className="my-3 rounded" style={{ height: "300px" }}>
      <Link to={`/product/${product.name}/${product.uuid}`}>
        <Card.Img
          src={`${url}${product.image}`}
          variant="top"
          style={{ height: "145px" }}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.uuid}`}>
          <Card.Title as="div" style={{ fontSize: "20px", fontWeight: "bold" }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Title style={{ fontSize: "16px" }}>
          <span>Rs: {product.price}</span>
        </Card.Title>
        <Button
          type="button"
          className="btn-block"
          style={{ backgroundColor: "#0B5ED7" }}
          // disabled={cartItem.length === 0}
          onClick={() => handleAddToCart(product.uuid, 1)}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
