import React, { Component } from "react";
import axios from "axios";
import ProductDelete from "./ProductDelete";

export default class ProductUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idCategory: "",
      price: "",
      description: "",
      photo: "",
      date: "",
      quantity: "",
      weight: "",
      status: false,
      title: "",
      isLoaded: false,
      alertSuccess: false,
      alertError: false,
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://127.0.0.1:8000/api/products/` +
          window.location.href.split("id=")[1]
      )
      .then((result) => {
        this.setState({
          idCategory: result.data.idCategory,
          price: result.data.price,
          description: result.data.description,
          photo: result.data.photo,
          date: result.data.date,
          quantity: result.data.quantity,
          weight: result.data.weight,
          status: result.data.status,
          title: result.data.title,
          isLoaded: true,
          alertSuccess: false,
          alertError: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]:
        event.target.id === "year" ||
        event.target.id === "month" ||
        event.target.id === "cardNumber" ||
        event.target.id === "zipcode"
          ? parseInt(event.target.value)
          : event.target.value,
    });
  };

  handleSubmitProduct = (event) => {
    event.preventDefault();

    axios
      .put(
        `http://127.0.0.1:8000/api/products/` +
          window.location.href.split("id=")[1],
        {
          idCategory: parseInt(this.state.idCategory),
          price: this.state.price,
          description: this.state.description,
          photo: this.state.photo,
          date: this.state.date,
          quantity: parseInt(this.state.quantity),
          weight: parseInt(this.state.weight),
          status: false,
          title: this.state.title,
        }
      )
      .then((response) => {
        console.log(response);
        this.setState({ alertSuccess: true });
      })
      .catch((error) => {
        console.log(error);
        if (error) this.setState({ alertError: true });
      });
  };

  render() {
    if (this.state.isLoaded === false) {
      return (
        <div id="profile" className="tc ma5">
          Loading...
        </div>
      );
    } else {
      return (
        <div className="fl w-100 tc">
          <div className="pa4 black-80">
            {this.state.alertSuccess ? (
              <p
                className="w-90 ba br2 pa3 ma2 green bg-washed-green"
                role="alert"
              >
                <strong>Good !</strong> Data successfully updated.
              </p>
            ) : (
              ""
            )}
            {this.state.alertError ? (
              <p className="w-90 ba br2 pa3 ma2 red bg-washed-red" role="alert">
                <strong>Error !</strong> Change a few things up and try
                submitting again.
              </p>
            ) : (
              ""
            )}
            <form
              onSubmit={this.handleSubmitProduct}
              className="measure center"
            >
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">
                  admin {">"} update product
                </legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="idCategory">
                    id category
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="number"
                    name="idCategory"
                    id="idCategory"
                    onChange={this.handleInputChange}
                    value={this.state.idCategory}
                    required
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="title">
                    title
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="text"
                    name="title"
                    id="title"
                    onChange={this.handleInputChange}
                    value={this.state.title}
                    required
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="price">
                    price
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="text"
                    name="price"
                    id="price"
                    onChange={this.handleInputChange}
                    value={this.state.price}
                    required
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="photo">
                    photo url
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="text"
                    name="photo"
                    id="photo"
                    onChange={this.handleInputChange}
                    value={this.state.photo}
                    required
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="date">
                    date
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="text"
                    name="date"
                    id="date"
                    onChange={this.handleInputChange}
                    value={this.state.date}
                    required
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="quantity">
                    quantity
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="number"
                    name="quantity"
                    id="quantity"
                    onChange={this.handleInputChange}
                    value={this.state.quantity}
                    required
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="weight">
                    weight
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="number"
                    name="weight"
                    id="weight"
                    onChange={this.handleInputChange}
                    value={this.state.weight}
                    required
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="status">
                    status
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="text"
                    name="status"
                    id="status"
                    onChange={this.handleInputChange}
                    value={this.state.status}
                    required
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="description">
                    description
                  </label>
                  <textarea
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="number"
                    name="description"
                    onChange={this.handleInputChange}
                    value={this.state.description}
                    required
                  />
                </div>

                <label className="pa0 ma0 lh-copy f6 pointer"></label>
              </fieldset>
              <div></div>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Update"
                />
              </div>
              <ProductDelete />
              <a href="/admin" className="no-underline black">
                <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                  Return to panel
                </div>
              </a>
            </form>
          </div>
        </div>
      );
    }
  }
}
