import React, { useEffect, useState } from "react";
import Nav from "../components/HomeNavbar/HomeNav";
import { Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, editProduct, getProduct } from "../actions/productAction";
import axios from "axios";
import { baseUrl } from "../utils/env";
import {
  ADD_PRODUCT_RESET,
  EDIT_PRODUCT_RESET,
} from "../constants/productConstant";
const ProductUpdatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { uuid } = useParams();

  const productEdit = useSelector((state) => state.productEdit);
  const { success } = productEdit;
  const listProduct = useSelector((state) => state.listProduct);
  const { product } = listProduct;

  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editProduct(name, price, image, category, subcategory, description, uuid)
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    // previewFile(file);
    const formData = new FormData();
    formData.append("image", file);
    // setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(`${baseUrl}/upload`, formData, config);

      setImage(data);
      // setUploading(false);
    } catch (err) {
      console.error(err);
      // setUploading(false);
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/admin/product");
      dispatch({ type: EDIT_PRODUCT_RESET });
    }
    dispatch(getProduct(uuid));
  }, [success]);

  return (
    <div>
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      <Container>
        <Link to="/admin/product" className="btn btn-light my-3">
          Back
        </Link>
        <FormContainer>
          <h1>Update Product</h1>
          <Form className="mt-4" onSubmit={handleFormSubmit}>
            <Form.Group controlId="name" className="mb-4">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                defaultValue={product && product.name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="price" className="mb-4">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                defaultValue={product && product.price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="image" className="mb-4">
              <Form.Label>Image</Form.Label>
              {/* <Form.Control
                type="text"
                placeholder="Enter image url"
                onChange={(e) => setImage(e.target.value)}
              /> */}
              <input
                type="file"
                class="form-control-file"
                id="image"
                onChange={uploadFileHandler}
                style={{ display: "block" }}
              />
              {/* <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File> */}
              {/* {uploading && <Loader />} */}
            </Form.Group>

            <div class="form-group">
              <label for="price">Category</label>
              <select
                class="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={product && product.category}
                required
              >
                <option value="">---Select Category---</option>
                <option
                  value="Shop_By_Category"
                  selected={
                    product && product.category == "Shop_By_Category"
                      ? true
                      : false
                  }
                >
                  Shop By Category
                </option>
                <option
                  value="Shop_By_Concern"
                  selected={
                    product && product.category == "Shop_By_Concern"
                      ? true
                      : false
                  }
                >
                  Shop By Concern
                </option>
              </select>
            </div>

            {product && product.category === "Shop_By_Category" && (
              <div class="form-group">
                <label for="price">Shop By Category</label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e) => setSubCategory(e.target.value)}
                  defaultValue={product && product.sub_category}
                >
                  <option value="">---Select Category---</option>
                  <option
                    value="Cooking_Essentials"
                    selected={
                      product && product.sub_category == "Cooking_Essentials"
                        ? true
                        : false
                    }
                  >
                    Cooking Essentials
                  </option>
                  <option
                    value="Dry_fruits_and_Superfoods"
                    selected={
                      product &&
                      product.sub_category == "Dry_fruits_and_Superfoods"
                        ? true
                        : false
                    }
                  >
                    Dry fruits and Superfoods
                  </option>
                  <option
                    value="Honey_and_Spreads"
                    selected={
                      product && product.sub_category == "Honey_and_Spreads"
                        ? true
                        : false
                    }
                  >
                    Honey and Spreads
                  </option>
                  <option
                    value="Dairy_and_Cheese"
                    selected={
                      product && product.sub_category == "Dairy_and_Cheese"
                        ? true
                        : false
                    }
                  >
                    Dairy and Cheese
                  </option>
                  <option
                    value="Breakfast_and_Snacks"
                    selected={
                      product && product.sub_category == "Breakfast_and_Snacks"
                        ? true
                        : false
                    }
                  >
                    Breakfast and Snacks
                  </option>
                  <option
                    value="Tea_Coffee_and_Beverages"
                    selected={
                      product &&
                      product.sub_category == "Tea_Coffee_and_Beverages"
                        ? true
                        : false
                    }
                  >
                    Tea Coffee and Beverages
                  </option>
                </select>
              </div>
            )}
            {product && product.category === "Shop_By_Concern" && (
              <div class="form-group">
                <label for="price">Shop By Concern</label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e) => setSubCategory(e.target.value)}
                  defaultValue={product && product.sub_category}
                >
                  <option value="">---Select Concern---</option>
                  <option
                    value="Digestion"
                    selected={
                      product && product.sub_category == "Digestion"
                        ? true
                        : false
                    }
                  >
                    Digestion
                  </option>
                  <option
                    value="Gluten_free"
                    selected={
                      product && product.sub_category == "Gluten_free"
                        ? true
                        : false
                    }
                  >
                    Gluten free
                  </option>
                  <option
                    value="Diabetes"
                    selected={
                      product && product.sub_category == "Diabetes"
                        ? true
                        : false
                    }
                  >
                    Diabetes
                  </option>
                  <option
                    value="Child_Care"
                    selected={
                      product && product.sub_category == "Child_Care"
                        ? true
                        : false
                    }
                  >
                    Child Care
                  </option>
                  <option
                    value="Vegan"
                    selected={
                      product && product.sub_category == "Vegan" ? true : false
                    }
                  >
                    Vegan
                  </option>
                  <option
                    value="Pregnancy"
                    selected={
                      product && product.sub_category == "Pregnancy"
                        ? true
                        : false
                    }
                  >
                    Pregnancy
                  </option>
                </select>
              </div>
            )}

            <div class="form-group">
              <label for="price">Description</label>
              <textarea
                class="form-control"
                id="description"
                rows="5"
                placeholder="Enter Product Description"
                onChange={(e) => setDescription(e.target.value)}
                defaultValue={product && product.description}
                required
              ></textarea>
            </div>

            <Button type="submit" variant="primary" className="mb-4">
              Update Product
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </div>
  );
};

export default ProductUpdatePage;
