import React, { Component } from "react";
import axios from "axios";

export default class AdminUserCreateElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkUserInfos:
        window.location.href.split("admin")[0] +
        "admin-user-read?id=" +
        window.location.href.split("?id=")[1].charAt(0),
      user: "api/users/" + window.location.href.split("?id=")[1].charAt(0),
      surname: "",
      name: "",
      cardNumber: "",
      month: "",
      year: "",
      phone: "",
      street: "",
      zipcode: "",
      city: "",
      country: "",
      isLoaded: false,
      alertSuccess: false,
      alertError: false,
    };
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

  handleSubmitBank = (event) => {
    event.preventDefault();

    axios
      .post(`http://127.0.0.1:8000/api/bank_details`, {
        user: this.state.user,
        surname: this.state.surname,
        name: this.state.name,
        cardNumber: this.state.cardNumber,
        month: this.state.month,
        year: this.state.year,
      })
      .then((response) => {
        console.log(response);
        this.setState({ alertSuccess: true });
      })
      .catch((error) => {
        console.log(error);
        if (error) this.setState({ alertError: true });
      });
  };

  handleSubmitAddress = (event) => {
    event.preventDefault();

    axios
      .post(`http://127.0.0.1:8000/api/addresses`, {
        user: this.state.user,
        surname: this.state.surname,
        name: this.state.name,
        phone: this.state.phone,
        street: this.state.street,
        zipcode: this.state.zipcode,
        city: this.state.city,
        country: this.state.country,
      })
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
    if (window.location.href.includes("bank")) {
      return (
        <div className="fl w-100 tc">
          <div className="pa4 black-80">
            {this.state.alertSuccess ? (
              <p
                className="w-90 ba br2 pa3 ma2 green bg-washed-green"
                role="alert"
              >
                <strong>Good !</strong> Data successfully created.
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
            <form onSubmit={this.handleSubmitBank} className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">
                  admin {">"} create debit card
                </legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="surname">
                    Surname
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="text"
                    name="surname"
                    id="surname"
                    onChange={this.handleInputChange}
                    value={this.state.surname}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="cardNumber">
                    Card number
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="number"
                    name="cardNumber"
                    id="cardNumber"
                    onChange={this.handleInputChange}
                    value={this.state.cardNumber}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="month">
                    Month
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="number"
                    name="month"
                    id="month"
                    min="1"
                    max="12"
                    onChange={this.handleInputChange}
                    value={this.state.month}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="year">
                    Year
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="number"
                    name="year"
                    id="year"
                    min={new Date().getFullYear()}
                    max={new Date().getFullYear() + 21}
                    onChange={this.handleInputChange}
                    value={this.state.year}
                  />
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer"></label>
              </fieldset>
              <div></div>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Create"
                />
              </div>
            </form>
            <div className="mt4">
              <a href={this.state.linkUserInfos} className="no-underline black">
                <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mr2">
                  Return to user infos
                </div>
              </a>
              <a href="/admin" className="no-underline black">
                <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ml2">
                  Return to panel
                </div>
              </a>
            </div>
          </div>
        </div>
      );
    } else if (window.location.href.includes("address")) {
      if (this.state.isLoaded === false) {
        return (
          <div className="fl w-100 tc">
            <div className="pa4 black-80">
              {this.state.alertSuccess ? (
                <p
                  className="w-90 ba br2 pa3 ma2 green bg-washed-green"
                  role="alert"
                >
                  <strong>Good !</strong> Data successfully created.
                </p>
              ) : (
                ""
              )}
              {this.state.alertError ? (
                <p
                  className="w-90 ba br2 pa3 ma2 red bg-washed-red"
                  role="alert"
                >
                  <strong>Error !</strong> Change a few things up and try
                  submitting again.
                </p>
              ) : (
                ""
              )}
              <form
                onSubmit={this.handleSubmitAddress}
                className="measure center"
              >
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0">
                    admin {">"} create address
                  </legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="surname">
                      Surname
                    </label>
                    <input
                      className="b pa2 input-reset ba bg-transparent w-100"
                      type="text"
                      name="surname"
                      id="surname"
                      onChange={this.handleInputChange}
                      value={this.state.surname}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="b pa2 input-reset ba bg-transparent w-100"
                      type="text"
                      name="name"
                      id="name"
                      onChange={this.handleInputChange}
                      value={this.state.name}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="b pa2 input-reset ba bg-transparent w-100"
                      type="text"
                      name="phone"
                      id="phone"
                      onChange={this.handleInputChange}
                      value={this.state.phone}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="street">
                      Street
                    </label>
                    <input
                      className="b pa2 input-reset ba bg-transparent w-100"
                      type="text"
                      name="street"
                      id="street"
                      onChange={this.handleInputChange}
                      value={this.state.street}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="zipcode">
                      Zipcode
                    </label>
                    <input
                      className="b pa2 input-reset ba bg-transparent w-100"
                      type="number"
                      name="zipcode"
                      id="zipcode"
                      onChange={this.handleInputChange}
                      value={this.state.zipcode}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="city">
                      City
                    </label>
                    <input
                      className="b pa2 input-reset ba bg-transparent w-100"
                      type="text"
                      name="city"
                      id="city"
                      onChange={this.handleInputChange}
                      value={this.state.city}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="country">
                      Country
                    </label>
                    <input
                      className="b pa2 input-reset ba bg-transparent w-100"
                      type="text"
                      name="country"
                      id="country"
                      onChange={this.handleInputChange}
                      value={this.state.country}
                    />
                  </div>
                  <label className="pa0 ma0 lh-copy f6 pointer"></label>
                </fieldset>
                <div></div>
                <div className="">
                  <input
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Create"
                  />
                </div>
              </form>
              <div className="mt4">
                <a
                  href={this.state.linkUserInfos}
                  className="no-underline black"
                >
                  <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mr2">
                    Return to user infos
                  </div>
                </a>
                <a href="/admin" className="no-underline black">
                  <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ml2">
                    Return to panel
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}
