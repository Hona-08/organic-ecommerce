import React, { useEffect, useState } from "react";
import Nav from "../components/HomeNavbar/HomeNav";
import { Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../actions/productAction";
import axios from "axios";
import { baseUrl } from "../utils/env";
import { ADD_PRODUCT_RESET } from "../constants/productConstant";
const ProductAddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productAdd = useSelector((state) => state.productAdd);
  const { success } = productAdd;

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
    console.log("first");
    dispatch(
      addProduct(name, price, image, description, category, subcategory)
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
      dispatch({ type: ADD_PRODUCT_RESET });
    }
  }, [success]);

  return (
    <div>
      <Nav open={open} setOpen={setOpen} show={show} setShow={setShow} />{" "}
      <Container>
        <Link to="/admin/product" className="btn btn-light my-3">
          Back
        </Link>
        <FormContainer>
          <h1>Edit Product</h1>
          <Form className="mt-4" onSubmit={handleFormSubmit}>
            <Form.Group controlId="name" className="mb-4">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Name"
                // value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="price" className="mb-4">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                // value={price}
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
                required
              >
                <option value="">---Select Category---</option>
                <option value="Shop_By_Category">Shop By Category</option>
                <option value="Shop_By_Concern">Shop By Concern</option>
              </select>
            </div>

            {category === "Shop_By_Category" && (
              <div class="form-group">
                <label for="price">Shop By Category</label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e) => setSubCategory(e.target.value)}
                >
                  <option value="">---Select Category---</option>
                  <option value="Cooking_Essentials">Cooking Essentials</option>
                  <option value="Dry_fruits_and_Superfoods">
                    Dry fruits and Superfoods
                  </option>
                  <option value="Honey_and_Spreads">Honey and Spreads</option>
                  <option value="Dairy_and_Cheese">Dairy and Cheese</option>
                  <option value="Breakfast_and_Snacks">
                    Breakfast and Snacks
                  </option>
                  <option value="Tea_Coffee_and_Beverages">
                    Tea Coffee and Beverages
                  </option>
                </select>
              </div>
            )}
            {category === "Shop_By_Concern" && (
              <div class="form-group">
                <label for="price">Shop By Concern</label>
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e) => setSubCategory(e.target.value)}
                >
                  <option value="">---Select Concern---</option>
                  <option value="Digestion">Digestion</option>
                  <option value="Gluten_free">Gluten free</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Child_Care">Child Care</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Pregnancy">Pregnancy</option>
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
                required
              ></textarea>
            </div>

            <Button type="submit" variant="primary" className="mb-4">
              Add Product
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </div>
  );
};

export default ProductAddPage;
