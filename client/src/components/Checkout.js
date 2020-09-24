import React, { Component } from "react";
import axios from "axios";
import CookieGetter from "./CookieGetter";
import UserCreate from "./UserCreate";
import GuestCreate from "./GuestCreate";
import Cart from "./Cart";

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [],
      banks: [],
      selectedOptionAddress: 0,
      selectedOptionBanks: 0,
      isLoaded: false,
      selectedBank: 0,
      selectedAddress: 0,
      isToggleAddress: false,
      isToggleBank: false,
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
      guestEmail: "",
      csc: null,
    };
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeBank = this.handleChangeBank.bind(this);
    this.handleClickAddress = this.handleClickAddress.bind(this);
    this.handleClickBank = this.handleClickBank.bind(this);
  }

  componentDidMount() {
    if (CookieGetter("session")) {
      axios
        .get(
          `http://127.0.0.1:8000/user/profile/` +
            CookieGetter("session").split("|")[1]
        )
        .then((res) => {
          this.setState({ addresses: res.data.user_address });
          this.setState({ banks: res.data.user_bank });
          this.setState({ selectedAddress: this.state.addresses[0] });
          this.setState({ selectedBank: this.state.banks[0] });
          this.setState({ isLoaded: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  handleClickAddress() {
    this.setState((prevState) => ({
      isToggleAddress: !prevState.isToggleAddress,
    }));
  }

  handleClickBank() {
    this.setState((prevState) => ({
      isToggleBank: !prevState.isToggleBank,
    }));
  }

  handleChangeAddress(event) {
    this.setState({ selectedOptionAddress: event.target.value });
    this.setState({
      selectedAddress: this.state.addresses[event.target.value],
    });
  }

  handleChangeBank(event) {
    this.setState({ selectedOptionBank: event.target.value });
    this.setState({ selectedBank: this.state.banks[event.target.value] });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  render() {
    const addresses = this.state.addresses;
    const banks = this.state.banks;
    let address = this.state.selectedAddress;
    let bank = this.state.selectedBank;

    if (CookieGetter("session").split("|")[1]) {
      if (this.state.isLoaded === false) {
        return (
          <div id="profile" className="tc ma5">
            Loading...
          </div>
        );
      } else {
        return (
          <div className="mw9 center ph3-ns pb4">
            <h1 className="f3 tc mv5">CHECKOUT</h1>
            <div className="cf ph2-ns">
              <div className="fl w-100 w-50-ns pa2">
                <article className="center mw5 mw6-ns br3 hidden ba b--black-20 mv4">
                  <h2 className="f4 bg-near-white br3 br--top black-80 mv0 pa3">
                    Shipping informations
                  </h2>
                  <div className="pa3 bt b--black-20">
                    {addresses.length > 0 && (
                      <div>
                        <div>
                          <select
                            className="ba br3 b--light-silver pa2 bg-white"
                            value={this.state.selectedOptionAddress}
                            onChange={this.handleChangeAddress}
                          >
                            {Object.keys(addresses).map((item, i) => (
                              <option key={i} value={item}>
                                Address {item}
                              </option>
                            ))}
                            ;
                          </select>
                          <button
                            className="link f6 fw4 ba br3 b--light-silver bg-white hover-bg-green hover-white pa2 mt3 ml4 pointer"
                            onClick={this.handleClickAddress}
                          >
                            {this.state.isToggleAddress ? "HIDE" : "ADD"}
                          </button>
                          <ul>
                            <li className="pa1">
                              Surname : {address["surname"]}
                            </li>
                            <li className="pa1">Name : {address["name"]}</li>
                            <li className="pa1">Phone : {address["phone"]}</li>
                            <li className="pa1">
                              Street : {address["street"]}
                            </li>
                            <li className="pa1">
                              Zipcode: {address["zipcode"]}
                            </li>
                            <li className="pa1">City : {address["city"]}</li>
                            <li className="pa1">
                              Country : {address["country"]}
                            </li>
                          </ul>
                        </div>
                        {this.state.isToggleAddress ? (
                          <UserCreate aboutProps={"address"} />
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                    {addresses.length === 0 && (
                      <div>
                        <p>
                          No address found
                          <button
                            className="link f6 fw4 ba br3 b--light-silver bg-white hover-bg-green hover-white pa2 mt3 ml4 pointer"
                            onClick={this.handleClickAddress}
                          >
                            {this.state.isToggleAddress ? "HIDE" : "ADD"}
                          </button>
                        </p>
                        {this.state.isToggleAddress ? (
                          <UserCreate aboutProps={"address"} />
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </div>
                </article>
                <article className="center mw5 mw6-ns br3 hidden ba b--black-20 mv4">
                  <h2 className="f4 bg-near-white br3 br--top black-80 mv0 pa3">
                    Payment
                  </h2>
                  <div className="pa3 bt b--black-20">
                    {banks.length > 0 && (
                      <div>
                        <div>
                          <select
                            className="ba br3 b--light-silver pa2 bg-white"
                            value={this.state.selectedOptionBank}
                            onChange={this.handleChangeBank}
                          >
                            {Object.keys(banks).map((item, i) => (
                              <option key={i} value={item}>
                                Carte {item}
                              </option>
                            ))}
                            ;
                          </select>
                          <button
                            className="link f6 fw4 ba br3 b--light-silver bg-white hover-bg-green hover-white pa2 mt3 ml4 pointer"
                            onClick={this.handleClickBank}
                          >
                            {this.state.isToggleBank ? "HIDE" : "ADD"}
                          </button>
                          <ul>
                            <li className="pa1">Surname : {bank["surname"]}</li>
                            <li className="pa1">Name : {bank["name"]}</li>
                            <li className="pa1">
                              Card number : {bank["cardNumber"]}
                            </li>
                            <li className="pa1">Month : {bank["month"]}</li>
                            <li className="pa1">Year : {bank["year"]}</li>
                          </ul>
                        </div>
                        {this.state.isToggleBank ? (
                          <UserCreate aboutProps={"bank"} />
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                    {banks.length === 0 && (
                      <div>
                        <p>
                          No debit card found
                          <button
                            className="link f6 fw4 ba br3 b--light-silver bg-white hover-bg-green hover-white pa2 mt3 ml4 pointer"
                            onClick={this.handleClickBank}
                          >
                            {this.state.isToggleBank ? "HIDE" : "ADD"}
                          </button>
                        </p>
                        {this.state.isToggleBank ? (
                          <UserCreate aboutProps={"bank"} />
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="csc">
                        CSC
                      </label>
                      <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password"
                        name="csc"
                        id="csc"
                        value={this.state.csc}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div>
                      <button className="link f6 fw4 ba br3 b--light-silver bg-white hover-bg-green hover-white pa2 mt3 ml4 pointer">
                        PAYPAL
                      </button>
                      <button className="link f6 fw4 ba br3 b--light-silver bg-white hover-bg-green hover-white pa2 mt3 ml4 pointer ml3">
                        3 or 10 interest-free installments
                      </button>
                    </div>
                  </div>
                </article>
              </div>
              <div className="fl w-100 w-50-ns pa2">
                <article className="center mw5 mw6-ns br3 hidden ba b--black-20 mv4">
                  <h2 className="f4 bg-near-white br3 br--top black-80 mv0 pa3">
                    Products
                  </h2>
                  <div className="pa3 bt b--black-20">
                    <Cart
                      userAddress={this.state.selectedAddress.id}
                      userBank={this.state.selectedBank.id}
                      csc={this.state.csc}
                    />
                  </div>
                </article>
              </div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="mw9 center ph3-ns pb4">
          <h1 className="f3 tc mv5">CHECKOUT</h1>
          <div className="cf ph2-ns">
            <div className="fl w-100 w-50-ns pa2">
              <article className="center mw5 mw6-ns br3 hidden ba b--black-20 mv4">
                <h2 className="f4 bg-near-white br3 br--top black-80 mv0 pa3">
                  Shipping informations
                </h2>
                <div className="pa3 bt b--black-20">
                  <div>
                    <p>
                      Add an address
                      <button
                        className="link f6 fw4 ba br3 b--light-silver bg-white hover-bg-green hover-white pa2 mt3 ml4 pointer"
                        onClick={this.handleClickAddress}
                      >
                        {this.state.isToggleAddress ? "HIDE" : "ADD"}
                      </button>
                    </p>
                    <div>
                      {this.state.isToggleAddress ? (
                        <GuestCreate aboutProps={"address"} />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="guestEmail">
                      Email
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="email"
                      name="email"
                      id="guestEmail"
                      value={this.state.guestEmail}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </article>
              <article className="center mw5 mw6-ns br3 hidden ba b--black-20 mv4">
                <h2 className="f4 bg-near-white br3 br--top black-80 mv0 pa3">
                  Payment
                </h2>
                <div className="pa3 bt b--black-20">
                  <div>
                    <p>
                      Add a card
                      <button
                        className="link f6 fw4 ba br3 b--light-silver bg-white hover-bg-green hover-white pa2 mt3 ml4 pointer"
                        onClick={this.handleClickBank}
                      >
                        {this.state.isToggleBank ? "HIDE" : "ADD"}
                      </button>
                    </p>
                    {this.state.isToggleBank ? (
                      <GuestCreate aboutProps={"bank"} />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="csc">
                      CSC
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                      type="password"
                      name="csc"
                      id="csc"
                      value={this.state.csc}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <button className="link f6 fw4 ba br3 b--light-silver bg-white hover-bg-green hover-white pa2 mt3 ml4 pointer">
                      PAYPAL
                    </button>
                    <button className="link f6 fw4 ba br3 b--light-silver bg-white hover-bg-green hover-white pa2 mt3 ml4 pointer ml3">
                      3 or 10 interest-free installments
                    </button>
                  </div>
                </div>
              </article>
            </div>
            <div className="fl w-100 w-50-ns pa2">
              <article className="center mw5 mw6-ns br3 hidden ba b--black-20 mv4">
                <h2 className="f4 bg-near-white br3 br--top black-80 mv0 pa3">
                  Products
                </h2>
                <div className="pa3 bt b--black-20">
                  <Cart
                    guestEmail={this.state.guestEmail}
                    csc={this.state.csc}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      );
    }
  }
}
