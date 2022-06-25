import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstant";
import { baseUrl } from "../utils/env";
import { toast } from "react-toastify";
toast.configure();

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${baseUrl}/product/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.uuid,
      name: data.name,
      image: data.image,
      price: data.price,
      qty,
    },
  });
  toast.info("Product Added To Cart", {
    autoClose: 1000,
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().productAddToCart.cartItem)
  );
};

export const removeToCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().productAddToCart.cartItem)
  );
};

export const saveShippingAddress = (user) => async (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: user,
  });

  localStorage.setItem("saveShippingAddress", JSON.stringify(user));
};
