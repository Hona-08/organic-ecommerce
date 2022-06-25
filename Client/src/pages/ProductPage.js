import React, { useState, useEffect } from "react";
import Nav from "../components/HomeNavbar/HomeNav";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByCategory } from "../actions/productAction";
import Product from "../components/Product";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { tag } = useParams();
  // const listProducts = useSelector((state) => state.listProducts);
  // const { products } = listProducts;
  const listProductsByCategory = useSelector(
    (state) => state.listProductsByCategory
  );
  const { products } = listProductsByCategory;
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    dispatch(getProductsByCategory(tag, categoryId));
  }, [categoryId]);

  const handleChangeFilter = (e) => {
    setCategoryId(e.target.value);
  };
  return (
    <div>
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      <div class="album py-5 bg-light">
        <div class="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Products</h1>
            <div>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={handleChangeFilter}
              >
                <option selected value="0">
                  Filter Product
                </option>
                <option value="1">A-Z</option>
                <option value="2">Z-A</option>
                <option value="3">Low - High</option>
                <option value="4">High - Low</option>
              </select>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-3">
            {/* {products &&
              products.map(
                (product) =>
                  product.sub_category === tag && (
                    <div class="col">
                      <Product product={product} />
                    </div>
                  )
              )} */}
            {products &&
              products.map((product) => (
                <div class="col">
                  <Product product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
