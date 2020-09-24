import React, { Component } from "react";
import axios from "axios";
import CookieGetter from "./CookieGetter";
import sha1 from "sha1";

export default class UserEdit extends Component {
  constructor(props) {
    super(props);

    let dataProps = "";
    if (props.location.aboutProps !== undefined) {
      dataProps = props.location.aboutProps;
    }

    this.state = {
      email: dataProps ? dataProps.email : "",
      address: dataProps ? dataProps.address : "",
      bank: dataProps ? dataProps.bank : "",
      password: "",
      newPassword: "",
      surnameBank: dataProps.bank ? dataProps.bank["surname"] : "",
      nameBank: dataProps.bank ? dataProps.bank["name"] : "",
      cardNumber: dataProps.bank ? dataProps.bank["cardNumber"] : "",
      month: dataProps.bank ? dataProps.bank["month"] : "",
      year: dataProps.bank ? dataProps.bank["year"] : "",
      surnameAddress: dataProps.address ? dataProps.address["surname"] : "",
      nameAddress: dataProps.address ? dataProps.address["name"] : "",
      phone: dataProps.address ? dataProps.address["phone"] : "",
      street: dataProps.address ? dataProps.address["street"] : "",
      zipcode: dataProps.address ? dataProps.address["zipcode"] : "",
      city: dataProps.address ? dataProps.address["city"] : "",
      country: dataProps.address ? dataProps.address["country"] : "",
      isModify: false,
      alertError: false,
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = (event) => {
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

  handleSubmitInfo = (event) => {
    console.log(this.state.newPassword);
    event.preventDefault();
    const user = {
      email: this.state.email,
      password:
        this.state.newPassword !== ""
          ? sha1(this.state.newPassword + "wacommerce")
          : sha1(this.state.password + "waccomerce"),
    };

    axios
      .put(
        `http://127.0.0.1:8000/api/users/` +
          CookieGetter("session").split("|")[1],
        user
      )
      .then((res) => {
        console.log(res);
        document.cookie = `session=${this.state.email}|${
          CookieGetter("session").split("|")[1]
        }|${sha1(this.state.email + "cookieSession")}`;
        this.props.history.push("/user");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        if (error) this.setState({ alertError: true });
      });
  };

  handleSubmitAddress = (event) => {
    event.preventDefault();
    const selectedAddress = this.state.address["id"];
    const address = {
      surname: this.state.surname,
      name_address: this.state.name,
      phone: this.state.phone,
      street: this.state.street,
      city: this.state.city,
      zipcode: this.state.zipcode,
      country: this.state.country,
    };

    axios
      .put(`http://127.0.0.1:8000/api/addresses/` + selectedAddress, address)
      .then((res) => {
        console.log(res);
        this.props.history.push("/user");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        if (error) this.setState({ alertError: true });
      });
  };

  handleSubmitBank = (event) => {
    event.preventDefault();
    const selectedBank = this.state.bank["id"];
    const bank = {
      surname_bank: this.state.surname,
      name_bank: this.state.name,
      cardNumber: this.state.cardNumber,
      month: this.state.month,
      year: this.state.year,
    };

    axios
      .put(`http://127.0.0.1:8000/api/bank_details/` + selectedBank, bank)
      .then((res) => {
        console.log(res);
        this.props.history.push("/user");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        if (error) this.setState({ alertError: true });
      });
  };

  render() {
    if (this.props.location.aboutProps === undefined) {
      this.props.history.push("/user");
      window.location.reload(false);
    } else if (this.state.email) {
      return (
        <div id="userEdit">
          <div
            className="mt4 mw5 mw7-ns center pa2 shadow-4 pa4"
            style={{ backgroundColor: "#F1EFEB" }}
          >
            {this.state.alertError ? (
              <p className="w-90 ba br2 pa3 ma2 red bg-washed-red" role="alert">
                <strong>Error !</strong> Change a few things up and try
                submitting again.
              </p>
            ) : (
              ""
            )}
            <main className="pa4 black-80">
              <form className="measure center" onSubmit={this.handleSubmitInfo}>
                <fieldset
                  id="email_password"
                  className="ba b--transparent ph0 mh0"
                >
                  <legend className="f4 fw6 ph0 mh0">
                    Change my email/password
                  </legend>
                  <div className="mt3">
                    <label
                      className="db fw6 lh-copy f6"
                      htmlFor="email-address"
                    >
                      New email
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="email"
                      name="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="newPassword">
                      New Password
                    </label>
                    <input
                      className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="password"
                      name="newPassword"
                      id="newPassword"
                      value={this.state.newPassword}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="password"
                      name="password"
                      id="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </fieldset>
                <div className="">
                  <input
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Submit"
                    disabled={!this.validateForm()}
                  />
                </div>
              </form>
            </main>
          </div>
        </div>
      );
    } else if (this.state.address) {
      return (
        <div id="userEdit">
          <div
            className="mt4 mw5 mw7-ns center pa2 shadow-4 pa4"
            style={{ backgroundColor: "#F1EFEB" }}
          >
            {this.state.alertError ? (
              <p className="w-90 ba br2 pa3 ma2 red bg-washed-red" role="alert">
                <strong>Error !</strong> Change a few things up and try
                submitting again.
              </p>
            ) : (
              ""
            )}
            <main className="pa4 black-80">
              <form
                className="measure center"
                onSubmit={this.handleSubmitAddress}
              >
                <fieldset
                  id="edit_address"
                  className="ba b--transparent ph0 mh0"
                >
                  <legend className="f4 fw6 ph0 mh0">Edit my address</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="surname">
                      Surname
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="surname"
                      id="surname"
                      value={this.state.surnameAddress}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="name"
                      id="name"
                      value={this.state.nameAddress}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="phone"
                      id="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="street">
                      Street
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="street"
                      id="street"
                      value={this.state.street}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="zipcode">
                      Zipcode
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="number"
                      name="zipcode"
                      id="zipcode"
                      value={this.state.zipcode}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="city">
                      City
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="city"
                      id="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="country">
                      Country
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="country"
                      id="country"
                      value={this.state.country}
                      onChange={this.handleChange}
                    />
                  </div>
                </fieldset>
                <div className="">
                  <input
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </main>
          </div>
        </div>
      );
    } else if (this.state.bank) {
      return (
        <div id="userEdit">
          <div
            className="mt4 mw5 mw7-ns center pa2 shadow-4 pa4"
            style={{ backgroundColor: "#F1EFEB" }}
          >
            {this.state.alertError ? (
              <p className="w-90 ba br2 pa3 ma2 red bg-washed-red" role="alert">
                <strong>Error !</strong> Change a few things up and try
                submitting again.
              </p>
            ) : (
              ""
            )}
            <main className="pa4 black-80">
              <form className="measure center" onSubmit={this.handleSubmitBank}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0">Edit my debit card</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="surname">
                      Surname
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="surname"
                      id="surname"
                      value={this.state.surnameBank}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="name"
                      id="name"
                      value={this.state.nameBank}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="cardNumber">
                      Card number
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="number"
                      name="cardNumber"
                      id="cardNumber"
                      value={this.state.cardNumber}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="month">
                      Month
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="number"
                      name="month"
                      id="month"
                      min="1"
                      max="12"
                      value={this.state.month}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="year">
                      Year
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="number"
                      name="year"
                      id="year"
                      min={new Date().getFullYear()}
                      max={new Date().getFullYear() + 21}
                      value={this.state.year}
                      onChange={this.handleChange}
                    />
                  </div>
                </fieldset>
                <div className="">
                  <input
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </main>
          </div>
        </div>
      );
    }
  }
}
