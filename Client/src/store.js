import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer } from "./reducers/loginReducer";
import {
  listProductReducer,
  listProductsReducer,
  productAddReducer,
  productEditReducer,
  productDeleteReducer,
  listProductsByCategoryReducer,
} from "./reducers/productReducer";
import { productAddToCartReducer } from "./reducers/cartReducer";
import {
  listOrdersReducer,
  createOrdersReducer,
  listOrderReducer,
  orderPayReducer,
  orderDeliverReducer,
} from "./reducers/orderReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  listProduct: listProductReducer,
  listProducts: listProductsReducer,
  listProductsByCategory: listProductsByCategoryReducer,
  productAdd: productAddReducer,
  productAddToCart: productAddToCartReducer,
  productEdit: productEditReducer,
  productDelete: productDeleteReducer,
  listOrders: listOrdersReducer,
  createOrders: createOrdersReducer,
  listOrder: listOrderReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
});

const userInfoFromStrorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStrorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
