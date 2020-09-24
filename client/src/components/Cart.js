import React from "react";
import CartElement from "./CartElement";
import CookieGetter from "./CookieGetter";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      catalog: [],
      cost: "",
      alertError: false,
      order: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      (this.props.userAddress && this.props.userBank && this.props.csc) ||
      (this.props.guestEmail &&
        this.props.csc &&
        CookieGetter("guestAddress") &&
        CookieGetter("guestBank"))
    ) {
      Axios.post("http://127.0.0.1:8000/api/orders", {
        idUser: CookieGetter("session")
          ? parseInt(CookieGetter("session").split("|")[1])
          : 0,
        idProducts: this.state.items.map((item) => item.id),
        deliveryAddress: this.props.userAddress
          ? this.props.userAddress
          : parseInt(CookieGetter("guestAddress")),
        date: new Date().toISOString(),
        cost: this.state.items
          .map((item) =>
            parseFloat(this.state.catalog.find((x) => x.id == item.id).price)
          )
          .reduce(function (a, b) {
            return parseFloat(a) + parseFloat(b);
          }, 0)
          .toFixed(2),
        status: "Pending",
        card: this.props.userBank
          ? this.props.userBank
          : parseInt(CookieGetter("guestBank")),
        email: CookieGetter("session")
          ? /* CookieGetter("session").split("|")[0] */ null
          : this.props.guestEmail,
      }).then((res) => {
        console.log(res.data);
        document.cookie = "guestAddress=; Max-Age=-99999999;";
        document.cookie = "guestBank=; Max-Age=-99999999;";
        this.setState({ order: true });
      });
    } else {
      this.setState({ alertError: true });
    }
  }

  componentDidMount() {
    let cart =
      CookieGetter("cart") && CookieGetter("cart") !== "[]"
        ? JSON.parse(CookieGetter("cart"))
        : false;
    Axios.get("http://127.0.0.1:8000/api/products/").then((res) => {
      if (cart) {
        this.setState({
          items: cart,
          isLoaded: true,
          catalog: res.data["hydra:member"],
        });
      }
    });
  }

  render() {
    if (this.state.order) {
      return <Redirect to={{ pathname: "/orders" }} />;
    }
    var sum = 0;
    const cartList = this.state.items.map((item) => {
      sum =
        sum + parseFloat(this.state.catalog.find((x) => x.id == item.id).price);
      return (
        <CartElement
          id={item.id}
          name={this.state.catalog
            .find((x) => x.id == item.id)
            .title.substring(0, 60)}
          quantity={item.quantity}
          price={this.state.catalog.find((x) => x.id == item.id).price}
        />
      );
    });
    return (
      <div className="pa4">
        {this.state.alertError ? (
          <p class="w-90 ba br2 pa3 ma2 mb4 red bg-washed-red" role="alert">
            <strong>Error !</strong> You must add an address, a card and an
            email. Please fill in all fields.
          </p>
        ) : (
          ""
        )}
        <div className="overflow-auto">
          {this.state.isLoaded ? (
            <table className="f6 w-100 mw8 center" cellSpacing="0">
              <thead>
                <tr>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                    Product name
                  </th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                    Quantity
                  </th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                    Price
                  </th>
                  <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                {cartList}
                <tr>
                  <td className="pv3 pr3 bb b--black-20"></td>
                  <td className="pv3 pr3 bb b--black-20"></td>
                  <td className="pv3 pr3 bb b--black-20">{sum.toFixed(2)}</td>
                  <td className="pv3 pr3 bb b--black-20">
                    {window.location.href.split("/")[
                      window.location.href.split("/").length - 1
                    ] === "checkout" ? (
                      <div>
                        <form onSubmit={this.handleSubmit}>
                          {/* <input type="hidden"></input> */}
                          <button className="bn pointer f6 link dim ph3 pv2 mb2 dib white bg-dark-blue w3 tc">
                            Buy
                          </button>
                        </form>
                      </div>
                    ) : (
                      <a
                        className="f6 link dim ph3 pv2 mb2 dib white bg-dark-blue w3 tc"
                        href={"/checkout"}
                      >
                        Buy
                      </a>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            "Your cart is empty."
          )}
        </div>
      </div>
    );
  }
}
