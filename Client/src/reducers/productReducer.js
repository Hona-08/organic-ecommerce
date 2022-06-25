import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_RESET,
  ADD_PRODUCT_REVIEW_FAIL,
  ADD_PRODUCT_REVIEW_REQUEST,
  ADD_PRODUCT_REVIEW_RESET,
  ADD_PRODUCT_REVIEW_SUCCESS,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_RESET,
  DELETE_PRODUCT_SUCCESS,
  DELETE_REVIEW_FAIL,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_RESET,
  DELETE_REVIEW_SUCCESS,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_RESET,
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

export const listProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
        products: action.payload,
      };

    case GET_PRODUCT_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const listProductsByCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case GET_PRODUCT_BY_CATEGORY_SUCCESS:
      return {
        loading: false,
        success: true,
        products: action.payload,
      };

    case GET_PRODUCT_BY_CATEGORY_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const listProductReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };

    case GET_SINGLE_PRODUCT_FAIL:
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const productAddReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ADD_PRODUCT_FAIL:
      return {
        loading: true,
        error: action.payload,
      };
    case ADD_PRODUCT_RESET:
      return {
        loading: true,
        success: false,
      };
    default:
      return state;
  }
};

export const productEditReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
        // product: action.payload,
      };
    case EDIT_PRODUCT_FAIL:
      return {
        loading: true,
        error: action.payload,
      };
    case EDIT_PRODUCT_RESET:
      return {
        loading: true,
        success: false,
      };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return {
        loading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DELETE_PRODUCT_FAIL:
      return {
        loading: true,
        error: action.payload,
      };
    case DELETE_PRODUCT_RESET:
      return {
        loading: true,
        success: false,
      };
    default:
      return state;
  }
};
