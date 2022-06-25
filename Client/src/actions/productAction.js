import axios from "axios";
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_REVIEW_FAIL,
  ADD_PRODUCT_REVIEW_REQUEST,
  ADD_PRODUCT_REVIEW_SUCCESS,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_CATEGORY_FAIL,
  GET_PRODUCT_BY_CATEGORY_REQUEST,
  GET_PRODUCT_BY_CATEGORY_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  LIST_PRODUCT_REVIEW_FAIL,
  LIST_PRODUCT_REVIEW_REQUEST,
  LIST_PRODUCT_REVIEW_SUCCESS,
} from "../constants/productConstant";
import { baseUrl } from "../utils/env";
import { toast } from "react-toastify";
toast.configure();

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${baseUrl}/product`, config);

    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
export const getProductsByCategory = (tag, categoryId) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_BY_CATEGORY_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${baseUrl}/product/category/${tag}/${categoryId}`,
      config
    );

    dispatch({
      type: GET_PRODUCT_BY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_PRODUCT_BY_CATEGORY_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getProduct = (uuid) => async (dispatch) => {
  try {
    dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`${baseUrl}/product/${uuid}`, config);

    dispatch({
      type: GET_SINGLE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_SINGLE_PRODUCT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const addProduct =
  (name, price, image, description, category, sub_category) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_PRODUCT_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${baseUrl}/product`,
        { name, price, image, category, description, sub_category },
        config
      );
      toast.info("Product Added Successfully", {
        autoClose: 1000,
      });
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (err) {
      toast.error("Invalid Data", {
        autoClose: 1000,
      });
      dispatch({
        type: ADD_PRODUCT_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const editProduct =
  (name, price, image, category, sub_category, description, product_id) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: EDIT_PRODUCT_REQUEST });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.put(
        `${baseUrl}/product/${product_id}`,
        { name, price, image, category, sub_category, description },
        config
      );
      toast.info("Product Updated Successfully", {
        autoClose: 1000,
      });
      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (err) {
      toast.error("Invalid Data", {
        autoClose: 1000,
      });
      dispatch({
        type: EDIT_PRODUCT_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const deleteProduct = (product_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.delete(
      `${baseUrl}/product/${product_id}`,
      config
    );
    toast.info("Product Delete Successfully", {
      autoClose: 1000,
    });
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    toast.error("Invalid Data", {
      autoClose: 1000,
    });
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
