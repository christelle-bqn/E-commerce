import React from "react";
import CookieGetter from "./CookieGetter";
import axios from "axios";
import OrderElement from "./OrderElement";

export default class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      addresses: [],
      products: [],
      value: CookieGetter("session")
        ? CookieGetter("session").split("|")[0]
        : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    axios
      .all([
        axios.get(`http://127.0.0.1:8000/api/orders`),
        axios.get("http://127.0.0.1:8000/api/addresses"),
        axios.get("http://127.0.0.1:8000/api/products"),
      ])
      .then((res) => {
        this.setState({
          orders: res[0].data["hydra:member"],
          addresses: res[1].data["hydra:member"],
          products: res[2].data["hydra:member"],
        });
        console.log(this.state);
      })
      .catch((res) => {
        alert("Invalid order query.");
        console.log(res);
      });
  }

  render() {
    const orders = this.state.orders.map((order) => {
      return order.idUser == CookieGetter("session").split("|")[1] ||
        order.email == this.state.value ? (
        <OrderElement
          title={"Order ID #" + order.id}
          cost={order.cost}
          date={order.date.substring(0, 10)}
          deliveryAddress={this.state.addresses.find(
            (x) => x.id == order.deliveryAddress
          )}
          products={order.idProducts.map((product) => {
            return this.state.products.find((x) => x.id == product).title;
          })}
          status={order.status}
        />
      ) : (
        <></>
      );
    });
    return (
      <>
        {CookieGetter("session") ? (
          ""
        ) : (
          <form className="pa4 black-80" onSubmit={this.handleSubmit}>
            <div className="measure">
              <label for="name" className="f6 b db mb2">
                E-mail <span className="normal black-60">(not logged in)</span>
              </label>
              <input
                id="name"
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                aria-describedby="name-desc"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <small id="name-desc" className="f6 black-60 db mb2">
                Please input your e-mail above.
              </small>
            </div>
          </form>
        )}
        {orders}
      </>
    );
  }
}
