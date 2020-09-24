import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import CookieGetter from "./CookieGetter";
import UserEdit from "./UserEdit";
import UserCreate from "./UserCreate";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      addresses: [],
      banks: [],
      selectedOptionAddress: 0,
      selectedOptionBanks: 0,
      isLoaded: false,
      selectedBank: 0,
      selectedAddress: 0,
      alertError: false,
    };
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeBank = this.handleChangeBank.bind(this);
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

  componentDidMount() {
    axios
      .get(
        `http://127.0.0.1:8000/user/profile/` +
          CookieGetter("session").split("|")[1]
      )
      .then((res) => {
        this.setState({ email: res.data.user_email });
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

  deleteAddress = (event) => {
    event.preventDefault();

    axios
      .delete(
        `http://127.0.0.1:8000/api/addresses/` + this.state.selectedAddress.id
      )
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        if (error) this.setState({ alertError: true });
      });
  };

  deleteBank = (event) => {
    event.preventDefault();

    axios
      .delete(
        `http://127.0.0.1:8000/api/bank_details/` + this.state.selectedBank.id
      )
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        if (error) this.setState({ alertError: true });
      });
  };

  render() {
    const addresses = this.state.addresses;
    const banks = this.state.banks;
    let address = this.state.selectedAddress;
    let bank = this.state.selectedBank;

    if (this.state.isLoaded === false) {
      return (
        <div id="profile" className="tc ma5">
          Loading...
        </div>
      );
    } else {
      return (
        <div id="profile" className="mw9 center ph3-ns">
          {this.state.alertError ? (
            <p className="w-90 ba br2 pa3 ma2 red bg-washed-red" role="alert">
              <strong>Error !</strong> Something went wrong.
            </p>
          ) : (
            ""
          )}
          <h1 className="f3 tc mv5">
            Hello, {CookieGetter("session").split("|")[0]} !
          </h1>

          <div className="cf ph2-ns">
            <div className="fl pa2 mr4 shadow-4 pa2">
              <ul className="list pl0">
                <li className="pa2 mb3">
                  <Link
                    className="link black hover-red"
                    to={{ pathname: "/user" }}
                  >
                    Account Dashboard
                  </Link>
                </li>
                <li className="pa2 mb3">
                  <Link
                    className="link black hover-red"
                    to={{ pathname: "/orders" }}
                  >
                    My Orders
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="fl w-100 w-70-ns pa2 shadow-4 pa4"
              style={{ backgroundColor: "#F1EFEB" }}
            >
              <h2>MY ACCOUNT</h2>

              <div className="pa4-ns bt bb b--silver">
                <div className="pb1">
                  <h3 className="dark-gray">Email</h3>
                </div>
                <p>{this.state.email}</p>
                <div className="mt4">
                  <Link
                    className="link white fw6 ba br3 b--light-silver pa2"
                    style={{ backgroundColor: "#81A077" }}
                    to={{
                      pathname: "/user/edit/credentials",
                      aboutProps: {
                        email: this.state.email,
                      },
                    }}
                  >
                    EDIT
                  </Link>
                </div>
              </div>
              <div className="pa4-ns bb b--silver">
                <div className="pb1">
                  <h3 className="dark-gray">Addresses</h3>
                </div>
                {addresses.length > 0 && (
                  <div>
                    <div>
                      <select
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
                      <ul>
                        <li className="pa1">Surname : {address["surname"]}</li>
                        <li className="pa1">Name : {address["name"]}</li>
                        <li className="pa1">Phone : {address["phone"]}</li>
                        <li className="pa1">Street : {address["street"]}</li>
                        <li className="pa1">Zipcode: {address["zipcode"]}</li>
                        <li className="pa1">City : {address["city"]}</li>
                        <li className="pa1">Country : {address["country"]}</li>
                      </ul>
                    </div>
                    <div className="mt4">
                      <Link
                        className="link white fw6 ba br3 b--light-silver pa2"
                        style={{ backgroundColor: "#81A077" }}
                        to={{
                          pathname: "/user/edit/address",
                          aboutProps: {
                            address: this.state.selectedAddress,
                          },
                        }}
                      >
                        EDIT
                      </Link>
                      <Link
                        className="link white fw6 ba br3 b--light-silver pa2 ml3"
                        style={{ backgroundColor: "#81A077" }}
                        to={{
                          pathname: "/user/create/address",
                          aboutProps: {
                            address: true,
                          },
                        }}
                      >
                        ADD
                      </Link>
                      <button
                        className="link white fw6 ba br3 b--light-silver pa2 ml3 pointer"
                        style={{ backgroundColor: "#81A077" }}
                        onClick={this.deleteAddress}
                      >
                        DELETE
                      </button>
                    </div>
                  </div>
                )}
                {addresses.length === 0 && (
                  <div>
                    <p>No address found</p>
                    <div className="mt4">
                      <Link
                        className="link white fw6 ba br3 b--light-silver pa2"
                        style={{ backgroundColor: "#81A077" }}
                        to={{
                          pathname: "/user/create/address",
                          aboutProps: {
                            address: true,
                          },
                        }}
                      >
                        ADD
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="pa4-ns bb b--silver">
                <div className="pb1">
                  <h3 className="dark-gray">Bank details</h3>
                </div>
                {banks.length > 0 && (
                  <div>
                    <div>
                      <select
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
                    <p className="mt4">
                      <Link
                        className="link white fw6 ba br3 b--light-silver pa2"
                        style={{ backgroundColor: "#81A077" }}
                        to={{
                          pathname: "/user/edit/bank",
                          aboutProps: {
                            bank: this.state.selectedBank,
                          },
                        }}
                      >
                        EDIT
                      </Link>
                      <Link
                        className="link white fw6 ba br3 b--light-silver pa2 ml3"
                        style={{ backgroundColor: "#81A077" }}
                        to={{
                          pathname: "/user/create/bank",
                          aboutProps: {
                            bank: true,
                          },
                        }}
                      >
                        ADD
                      </Link>
                      <button
                        className="link white fw6 ba br3 b--light-silver pa2 ml3 pointer"
                        style={{ backgroundColor: "#81A077" }}
                        onClick={this.deleteBank}
                      >
                        DELETE
                      </button>
                    </p>
                  </div>
                )}
                {banks.length === 0 && (
                  <div>
                    <p>No debit card found</p>
                    <div className="mt4">
                      <Link
                        className="link white fw6 ba br3 b--light-silver pa2"
                        style={{ backgroundColor: "#81A077" }}
                        to={{
                          pathname: "/user/create/bank",
                          aboutProps: {
                            bank: true,
                          },
                        }}
                      >
                        ADD
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Route path={`/user/edit/credentials`} component={UserEdit} />
          <Route path={`/user/edit/address`} component={UserEdit} />
          <Route path={`/user/edit/bank`} component={UserEdit} />
          <Route path={`/user/create/bank`} component={UserCreate} />
          <Route path={`/user/create/address`} component={UserCreate} />
          <Route path={`/user/delete/address`} component={UserEdit} />
          <Route path={`/user/delete/bank`} component={UserEdit} />
        </div>
      );
    }
  }
}
