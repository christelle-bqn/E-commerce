import React, { Component } from "react";
import axios from "axios";

export default class AdminUserUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankId: window.location.href.split("?bank=")[1],
      addressId: window.location.href.split("?address=")[1],
      user: "",
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

  componentDidMount() {
    if (this.state.bankId !== undefined) {
      axios
        .get(`http://127.0.0.1:8000/api/bank_details/` + this.state.bankId)
        .then((result) => {
          this.setState({ user: result.data.user });
          this.setState({ surname: result.data.surname });
          this.setState({ name: result.data.name });
          this.setState({ cardNumber: result.data.cardNumber });
          this.setState({ month: result.data.month });
          this.setState({ year: result.data.year });
          this.setState({
            linkUserInfos:
              window.location.href.split("admin")[0] +
              "admin-user-read?id=" +
              this.state.user.split("/")[3],
          });
          this.setState({ isLoaded: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (this.state.addressId !== undefined) {
      axios
        .get(`http://127.0.0.1:8000/api/addresses/` + this.state.addressId)
        .then((result) => {
          this.setState({ user: result.data.user });
          this.setState({ surname: result.data.surname });
          this.setState({ name: result.data.name });
          this.setState({ phone: result.data.phone });
          this.setState({ street: result.data.street });
          this.setState({ zipcode: result.data.zipcode });
          this.setState({ city: result.data.city });
          this.setState({ country: result.data.country });
          this.setState({
            linkUserInfos:
              window.location.href.split("admin")[0] +
              "admin-user-read?id=" +
              this.state.user.split("/")[3],
          });
          this.setState({ isLoaded: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
      .put(`http://127.0.0.1:8000/api/bank_details/` + this.state.bankId, {
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
      .put(`http://127.0.0.1:8000/api/addresses/` + this.state.addressId, {
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
    if (this.state.bankId !== undefined) {
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
              <form onSubmit={this.handleSubmitBank} className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0">
                    admin {">"} edit debit card
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
                    value="Update"
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
    } else if (this.state.addressId !== undefined) {
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
                    admin {">"} edit address
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
                    value="Update"
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
