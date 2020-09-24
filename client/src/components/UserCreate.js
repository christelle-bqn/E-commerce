import React, { Component } from "react";
import axios from "axios";
import CookieGetter from "./CookieGetter";

export default class UserCreate extends Component {
  constructor(props) {
    super(props);

    let dataProps = "";
    if (props.aboutProps !== undefined) {
      dataProps = props.aboutProps;
    } else if (props.location.aboutProps !== undefined) {
      dataProps = props.location.aboutProps;
    }

    this.state = {
      address: dataProps ? dataProps.address : "",
      bank: dataProps ? dataProps.bank : "",
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
      alertError: false,
    };
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

  handleSubmitAddress = (event) => {
    event.preventDefault();
    const address = {
      idUser: parseInt(CookieGetter("session").split("|")[1]),
      name: this.state.name,
      surname: this.state.surname,
      phone: this.state.phone,
      street: this.state.street,
      city: this.state.city,
      zipcode: this.state.zipcode,
      country: this.state.country,
    };

    axios
      .post(`http://127.0.0.1:8000/api/addresses`, address)
      .then((res) => {
        console.log(res);
        if (window.location.href.includes("user")) {
          this.props.history.push("/user");
          window.location.reload(false);
        } else if (window.location.href.includes("checkout")) {
          window.location.reload(false);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error) this.setState({ alertError: true });
      });
  };

  handleSubmitBank = (event) => {
    event.preventDefault();
    const bank = {
      idUser: parseInt(CookieGetter("session").split("|")[1]),
      name: this.state.name,
      surname: this.state.surname,
      cardNumber: this.state.cardNumber,
      month: this.state.month,
      year: this.state.year,
    };

    axios
      .post(`http://127.0.0.1:8000/api/bank_details`, bank)
      .then((res) => {
        console.log(res);
        if (window.location.href.includes("user")) {
          this.props.history.push("/user");
          window.location.reload(false);
        } else if (window.location.href.includes("checkout")) {
          window.location.reload(false);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error) this.setState({ alertError: true });
      });
  };

  render() {
    if (this.state.address || this.props.aboutProps === "address") {
      return (
        <div id="userCreate">
          <div
            className="mt4 mw5 mw7-ns center pa2 shadow-4 pa4"
            style={{ backgroundColor: "#F1EFEB" }}
          >
            <main className="pa4 black-80">
              <form
                className="measure center"
                onSubmit={this.handleSubmitAddress}
              >
                <fieldset
                  id="edit_address"
                  className="ba b--transparent ph0 mh0"
                >
                  <legend className="f4 fw6 ph0 mh0">Add an address</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="surname">
                      Surname
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="surname"
                      id="surname"
                      value={this.state.surname}
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
                      value={this.state.name}
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
    } else if (this.state.bank || this.props.aboutProps === "bank") {
      return (
        <div id="userCreate">
          <div
            className="mt4 mw5 mw7-ns center pa2 shadow-4 pa4"
            style={{ backgroundColor: "#F1EFEB" }}
          >
            <main className="pa4 black-80">
              <form className="measure center" onSubmit={this.handleSubmitBank}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0">Add a debit card</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="surname">
                      Surname
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="text"
                      name="surname"
                      id="surname"
                      value={this.state.surname}
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
                      value={this.state.name}
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
                      max={new Date().getFullYear() + 20}
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
    } else if (this.props.location.aboutProps === undefined) {
      this.props.history.push("/user");
      window.location.reload(false);
    }
  }
}
