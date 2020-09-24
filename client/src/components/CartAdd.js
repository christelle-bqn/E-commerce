import CookieGetter from "./CookieGetter";
import React from "react";
import { Redirect } from "react-router-dom";

const CartAdd = () => {
  let id = window.location.href.split("id=")[1];
  let cart = CookieGetter("cart") ? JSON.parse(CookieGetter("cart")) : [];
  let existsInCart = cart.some((el) => el.id === id);
  if (!existsInCart && id) {
    cart.push({ id: id, quantity: 1 });
  }
  document.cookie = "cart=" + JSON.stringify(cart);
  return <Redirect to={"/products?id=" + id} />;
};

export default CartAdd;
