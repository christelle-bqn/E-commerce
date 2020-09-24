import CookieGetter from "./CookieGetter";
import React from "react";
import { Redirect } from "react-router-dom";

const CartDelete = () => {
  let id = window.location.href.split("delete=")[1];
  let cart = JSON.parse(CookieGetter("cart"));
  let removeIndex = cart.map((item) => item.id).indexOf(id);
  ~removeIndex && cart.splice(removeIndex, 1);
  document.cookie = "cart=" + JSON.stringify(cart);
  return <Redirect to={"/cart"} />;
};

export default CartDelete;
