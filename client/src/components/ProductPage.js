import React from "react";

class ProductPage extends React.Component {
  state = {
    isLoaded: false,
    error: null,
  };

  componentDidMount() {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          // request successful
          let response = request.responseText,
            json = JSON.parse(response);
          this.setState({
            isLoaded: true,
            content: json,
          });
        } else {
          // error
          this.setState({
            isLoaded: true,
            error: request.responseText,
          });
        }
      }
    });

    request.open(
      "GET",
      "http://127.0.0.1:8000/api/products/" + this.props.id,
      true
    );
    request.send();
  }
  render() {
    const { error, isLoaded, content } = this.state;
    let body;
    if (!isLoaded) {
      body = <div>Loading...</div>;
    } else if (error) {
      body = <div>Error occured. {console.log(error)}</div>;
    } else {
      body = (
        <div className="cf">
          <div className="pa3 pa5-ns fl w-100 w-50-ns">
            <h1 className="f2">{content.title}</h1>
            <img
              src={content.photo}
              className="w-100 f5 measure"
              alt="Outer space"
            />
            <p className="measure lh-copy">{content.description}</p>
          </div>
          <div className="fl w-100 w-50-ns pa3 pa5-ns fl w-100 w-50-ns">
            <h1 className="f4 bold center mw5">€{content.price}</h1>
            <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
              <a className="no-underline" href="placeholder">
                <li className="ph3 pv2 bb b--light-silver black">Buy now!</li>
              </a>
              <a
                className="no-underline"
                href={"/cart-add?id=" + window.location.href.split("id=")[1]}
              >
                <li className="ph3 pv2 bb b--light-silver black">
                  Add to cart
                </li>
              </a>
              {content.status == 1 ? (
                <img src="used.jpg" alt="Used product" />
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      );
    }
    return <>{body}</>;
  }
}

export default ProductPage;
