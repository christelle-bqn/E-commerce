import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminUserReadElement = () => {
  const [data, setData] = useState({ hits: [] });
  const [addressUser, setAddressUser] = useState([]);
  const [bankUser, setBankUser] = useState([]);
  const [alertError, setAlertError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://127.0.0.1:8000/user/profile/" +
          window.location.href.split("?id=")[1]
      );
      setData(result.data);
      setAddressUser(result.data.user_address);
      setBankUser(result.data.user_bank);
    };
    fetchData();
  }, []);

  const deleteAddress = (address) => {
    axios
      .delete(`http://127.0.0.1:8000/api/addresses/` + address)
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        if (error) setAlertError(true);
      });
  };

  const deleteBank = (bank) => {
    axios
      .delete(`http://127.0.0.1:8000/api/bank_details/` + bank)
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        if (error) setAlertError(true);
      });
  };

  return (
    <dl className="lh-title pa4 mt0 pa3 pa5-ns w-50-ns fl">
      {alertError ? (
        <p className="w-90 ba br2 pa3 ma2 red bg-washed-red" role="alert">
          <strong>Error !</strong> Something went wrong.
        </p>
      ) : (
        ""
      )}
      <h1 className="f4 bold center mw6 tc">{data.user_email}</h1>

      <dt className="f6 b">User addresses:</dt>
      <dd className="ml0">
        {addressUser.length ? (
          data.user_address.map((address) => (
            <ul>
              <li>
                <b>Id: </b> {address.id}
              </li>
              <li>
                <b>Name: </b> {address.name}
              </li>
              <li>
                <b>Surname: </b> {address.surname}
              </li>
              <li>
                <b>Phone: </b> {address.phone}
              </li>
              <li>
                <b>Street: </b> {address.street}
              </li>
              <li>
                <b>City: </b> {address.city}
              </li>
              <li>
                <b>Zipcode: </b> {address.zipcode}
              </li>
              <li>
                <b>Country: </b> {address.country}
              </li>
              <a
                className="no-underline"
                href={
                  window.location.href.split("read")[0] +
                  "update?id=" +
                  address.user.split("/")[3] +
                  "?address=" +
                  address.id
                }
                key={address["@id"]}
              >
                <button
                  className="link white f6 fw4 ba br3 b--light-silver pa2 mt3 pointer"
                  style={{ backgroundColor: "grey" }}
                >
                  EDIT
                </button>
              </a>
              <a
                className="no-underline"
                href={
                  window.location.href.split("read")[0] +
                  "create?id=" +
                  window.location.href.split("?id=")[1] +
                  "?address"
                }
              >
                <button
                  className="link white f6 fw4 ba br3 b--light-silver pa2 mt3 ml4 pointer"
                  style={{ backgroundColor: "grey" }}
                >
                  ADD
                </button>
              </a>
              <button
                className="white f6 fw4 ba br3 b--light-silver pa2 mt3 mb4 ml4 pointer"
                style={{ backgroundColor: "grey" }}
                onClick={() => deleteAddress(address.id)}
              >
                DELETE
              </button>
            </ul>
          ))
        ) : (
          <div>
            <div className="mt4">No addresses found</div>
            <a
              className="no-underline"
              href={
                window.location.href.split("read")[0] +
                "create?id=" +
                window.location.href.split("?id=")[1] +
                "?address"
              }
            >
              <button
                className="link white f6 fw4 ba br3 b--light-silver pa2 mt3 mb4 pointer"
                style={{ backgroundColor: "grey" }}
              >
                ADD
              </button>
            </a>
          </div>
        )}
      </dd>
      <dt className="f6 b mt2">User cards:</dt>
      <dd className="ml0">
        {bankUser.length ? (
          data.user_bank.map((bank) => (
            <ul>
              <li>
                <b>Id: </b> {bank.id}
              </li>
              <li>
                <b>Name: </b>
                {bank.name + " " + bank.surname}
              </li>
              <li>
                <b>Card number: </b>
                {bank.cardNumber}
              </li>
              <li>
                <b>Expiration date: </b>
                {bank.month + "/" + bank.year}
              </li>
              <a
                className="no-underline"
                href={
                  window.location.href.split("read")[0] +
                  "update?id=" +
                  bank.user.split("/")[3] +
                  "?bank=" +
                  bank.id
                }
                key={bank["@id"]}
              >
                <button
                  className="link white f6 fw4 ba br3 b--light-silver pa2 mt3 pointer"
                  style={{ backgroundColor: "grey" }}
                >
                  EDIT
                </button>
              </a>
              <a
                className="no-underline"
                href={
                  window.location.href.split("read")[0] +
                  "create?id=" +
                  window.location.href.split("?id=")[1] +
                  "?bank"
                }
              >
                <button
                  className="link white f6 fw4 ba br3 b--light-silver pa2 mt3 ml4 pointer"
                  style={{ backgroundColor: "grey" }}
                >
                  ADD
                </button>
              </a>
              <button
                className="white f6 fw4 ba br3 b--light-silver pa2 mt3 mb4 ml4 pointer"
                style={{ backgroundColor: "grey" }}
                onClick={() => deleteBank(bank.id)}
              >
                DELETE
              </button>
            </ul>
          ))
        ) : (
          <div>
            <div className="mt4">No cards found</div>
            <a
              className="no-underline"
              href={
                window.location.href.split("read")[0] +
                "create?id=" +
                window.location.href.split("?id=")[1] +
                "?bank"
              }
            >
              <button
                className="link white f6 fw4 ba br3 b--light-silver pa2 mt3 mb4 pointer"
                style={{ backgroundColor: "grey" }}
              >
                ADD
              </button>
            </a>
          </div>
        )}
      </dd>
    </dl>
  );

  //   return (
  //     <div className="pa3 pa5-ns">
  //       <h1 className="f4 bold center mw6 tc">User list</h1>
  //       <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
  //         {users
  //           ? users.map((user) => (
  //               <a
  //                 className="no-underline"
  //                 href={
  //                   window.location.href.split("?id=")[0] +
  //                   "?id=" +
  //                   user["@id"].split("/")[user["@id"].split("/").length - 1]
  //                 }
  //                 key={user["@id"]}
  //               >
  //                 <li className="ph3 pv3 bb b--light-silver black">
  //                   {user.email}
  //                 </li>
  //               </a>
  //             ))
  //           : ""}
  //       </ul>
  //     </div>
  //   );
  // };
};

export default AdminUserReadElement;
