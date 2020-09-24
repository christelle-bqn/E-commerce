import React from "react";
import AdminPage from "./components/AdminPage";
import AdminUserCreate from "./components/AdminUserCreate";
import AdminUserDelete from "./components/AdminUserDelete";
import AdminUserDeleteElement from "./components/AdminUserDeleteElement";
import AdminUserRead from "./components/AdminUserRead";
import AdminUserReadElement from "./components/AdminUserReadElement";
import AdminUserUpdate from "./components/AdminUserUpdate";
import AdminUserCreateElement from "./components/AdminUserCreateElement";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import Categories from "./components/Categories";
import JoinPage from "./components/JoinPage";
import ProductPage from "./components/ProductPage";
import Checkout from "./components/Checkout";
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AdminProductCreate from "./components/AdminProductCreate";
import Cart from "./components/Cart";
import CartAdd from "./components/CartAdd";
import ProductUpdate from "./components/ProductUpdate";
import CartDelete from "./components/CartDelete";
import Orders from "./components/Orders";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin-product-create">
          <Navbar />
          <AdminProductCreate />
        </Route>
        <Route path="/admin-product-read">
          <Navbar />
          <div className="w-100 h3 mb4 mb1-m mb0-l">
            <div className="fl w-100 w-third-m w-20-l pa2 pr4-ns">
              <Categories />
            </div>
            <div className="fl w-100 w-two-thirds-m w-80-l pa2">
              <Catalog page="1" />
            </div>
          </div>
          <Redirect to="/admin-product-read?search=" />
        </Route>
        <Route path="/about">
          <Navbar />
          <About />
        </Route>
        <Route path="/admin-product-update">
          <Navbar />
          <div className="w-100 h3 mb4 mb1-m mb0-l">
            <div className="fl w-100 w-third-m w-20-l pa2 pr4-ns">
              <Categories />
            </div>
            <div className="fl w-100 w-two-thirds-m w-80-l pa2">
              <Catalog page="1" />
            </div>
          </div>
          <Redirect to="/admin-product-update?search=" />
        </Route>
        <Route path="/admin-user-create">
          <Navbar />
          {window.location.href.split("?id=")[1] ? (
            <AdminUserCreateElement />
          ) : (
            <AdminUserCreate />
          )}
        </Route>
        <Route path="/admin-user-read">
          <Navbar />
          <AdminUserRead />
          {window.location.href.split("?id=")[1] ? (
            <AdminUserReadElement />
          ) : (
            ""
          )}
        </Route>
        <Route path="/admin-user-update">
          <Navbar />
          {window.location.href.split("?bank=")[1] ||
          window.location.href.split("?address=")[1] ? (
            <AdminUserUpdate />
          ) : (
            ""
          )}
        </Route>
        <Route path="/admin-user-delete">
          <Navbar />
          <AdminUserDelete />
          {window.location.href.split("?id=")[1] ? (
            <AdminUserDeleteElement />
          ) : (
            ""
          )}
        </Route>
        <Route path="/admin">
          <div className="cf">
            <Navbar />
            <AdminPage />
          </div>
        </Route>
        <Route path="/cart-add">{CartAdd()}</Route>
        <Route path="/cart-delete">{CartDelete()}</Route>
        <Route path="/cart">
          <Navbar />
          <Cart />
        </Route>
        <Route path="/products">
          <Navbar />
          <ProductPage id={window.location.href.split("?id=")[1]} />
        </Route>
        <Route path="/user">
          <Navbar />
          <JoinPage />
        </Route>
        <Route path="/logout">{Logout()}</Route>
        <Route path="/update">
          <Navbar />
          <ProductUpdate />
        </Route>
        <Route path="/contact">
          <Navbar />
          <ContactForm />
        </Route>
        <Route path="/checkout">
          <Navbar />
          <Checkout />
        </Route>
        <Route path="/orders">
          <Navbar />
          <Orders />
        </Route>
        <Route path="/">
          <Navbar />
          <div className="w-100 h3 mb4 mb1-m mb0-l">
            <div className="fl w-100 w-third-m w-20-l pa2 pr4-ns">
              <Categories />
            </div>
            <div className="fl w-100 w-two-thirds-m w-80-l pa2">
              <Catalog page="1" />
            </div>
          </div>
          {/* <Redirect to="/?search=" /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
