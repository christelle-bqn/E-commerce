import React from "react";
import MenuList from "./MenuList";
import Logo from "./logo.png";
import CookieGetter from "./CookieGetter";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showing: false };
  }

  render() {
    const { showing } = this.state;
    return (
      <>
        <div className="flex justify-between bb b--white-10 bg-light-gray">
          <div
            className="pointer link white-70 hover-white no-underline flex items-center pa3"
            onClick={() => this.setState({ showing: !showing })}
          >
            <svg
              className="dib h1 w1"
              data-icon="grid"
              viewBox="0 0 32 32"
              style={{ fill: "red" }}
            >
              <title>Super Normal Icon Mark</title>
              <path d="M2 2 L10 2 L10 10 L2 10z M12 2 L20 2 L20 10 L12 10z M22 2 L30 2 L30 10 L22 10z M2 12 L10 12 L10 20 L2 20z M12 12 L20 12 L20 20 L12 20z M22 12 L30 12 L30 20 L22 20z M2 22 L10 22 L10 30 L2 30z M12 22 L20 22 L20 30 L12 30z M22 22 L30 22 L30 30 L22 30z"></path>
            </svg>
          </div>
          <div className="mt3 tc dn dib-l">
            <a href="/?search=">
              <img
                src={Logo}
                alt="logo"
                height="40"
                className="w-25"
                style={{ height: "30%" }}
              ></img>
            </a>
            <div className="mt3">HIGH-TECH SHOP</div>
          </div>
          <div className="flex-grow pa3 flex items-center">
            <a className="f6 link dib red dim mr3 mr4-ns" href="/cart">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <a className="f6 link dib red dim mr3 mr4-ns" href="/user">
              <i className="fas fa-user-circle"></i>
            </a>
            {CookieGetter("session") ? (
              <a className="f6 link dib red dim mr3 mr4-ns" href="/logout">
                <i class="fas fa-power-off"></i>
              </a>
            ) : (
              ""
            )}
            <form action="/" method="get">
              <div className="measure-narrow dib">
                <input
                  className="input-reset ba b--black-20 db w-100"
                  type="text"
                  name="search"
                  id="search"
                  aria-describedby="search-desc"
                />
              </div>
            </form>
          </div>
        </div>

        {showing ? (
          <MenuList
            listItems={[
              { title: "Home", url: "/?search=" },
              { title: "Follow order", url: "/orders" },
              { title: "About Us", url: "/about" },
              { title: "Contact", url: "/contact" },
            ]}
          />
        ) : null}
      </>
    );
  }
}

export default Navbar;
