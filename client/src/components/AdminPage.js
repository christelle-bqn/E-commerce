import React from "react";
import sha1 from "sha1";
import CookieGetter from "./CookieGetter";

const AdminPage = () => {
  const isAdmin =
    CookieGetter("session") ===
    "admin@admin|1|" + sha1("admin@admincookieSession")
      ? true
      : false;
  return (
    <>
      {isAdmin ? (
        <>
          <p className="f3 tc">
            Welcome to the developer panel! What do you want to do?
          </p>
          <section className="cf">
            <div className="fl w-100 w-50-ns pv4">
              <h1 className="f4 bold center mw5 tc">Users</h1>
              <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
                <a className="no-underline" href="/admin-user-create">
                  <li className="ph3 pv2 bb b--light-silver black">
                    Create a new user
                  </li>
                </a>
                <a className="no-underline" href="/admin-user-read">
                  <li className="ph3 pv2 bb b--light-silver black">
                    Read user data
                  </li>
                </a>
                <a className="no-underline" href="/admin-user-delete">
                  <li className="ph3 pv2 black">Delete user</li>
                </a>
              </ul>
            </div>
            <div className="fl w-100 w-50-ns pv4">
              <h1 className="f4 bold center mw5 tc">Products</h1>
              <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
                <a className="no-underline" href="/admin-product-create">
                  <li className="ph3 pv2 bb b--light-silver black">
                    Create product
                  </li>
                </a>
                <a className="no-underline" href="/admin-product-read?search=">
                  <li className="ph3 pv2 bb b--light-silver black">
                    Read product data
                  </li>
                </a>
                <a className="no-underline" href="/admin-product-update">
                  <li className="ph3 pv2 bb b--light-silver black">
                    Update product information
                  </li>
                </a>
                <a className="no-underline" href="/admin-product-delete">
                  <li className="ph3 pv2 black">Delete product</li>
                </a>
              </ul>
            </div>
          </section>
        </>
      ) : (
        <p className="f3 tc">403 FORBIDDEN</p>
      )}
    </>
  );
};

export default AdminPage;
