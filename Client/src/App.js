import React from "react";
import "./App.css"; //importing universal css
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import ContactPage from "./pages/ContactPage.js";
import AccountPage from "./pages/AccountPage.js";
import ProductListPage from "./pages/ProductListPage";
import ProductAddPage from "./pages/ProductAddPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage.js";
import ProductUpdatePage from "./pages/ProductUpdatePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import OrderListPage from "./pages/OrderListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
// import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/shipping" element={<ShippingPage />} />
        <Route exact path="/payment" element={<PaymentPage />} />
        <Route exact path="/placeorder" element={<PlaceOrderPage />} />
        <Route exact path="/order/:uuid" element={<OrderPage />} />
        <Route exact path="/product/:tag" element={<ProductPage />} />
        <Route
          exact
          path="/product/:productName/:uuid"
          element={<ProductDetailPage />}
        />
        <Route exact path="/admin/product" element={<ProductListPage />} />
        <Route exact path="/admin/product/add" element={<ProductAddPage />} />
        <Route
          exact
          path="/admin/product/update/:uuid"
          element={<ProductUpdatePage />}
        />
        <Route exact path="/admin/order" element={<OrderListPage />} />
      </Routes>
    </Router>
  );
}
export default App;
