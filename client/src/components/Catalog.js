import React from "react";
import ProductCard from "./ProductCard";

class Catalog extends React.Component {
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
      "http://127.0.0.1:8000/api/products?page=" + this.props.page,
      true
    );
    request.send();
  }

  render() {
    const { error, isLoaded, content } = this.state;
    // this.lastPage = content.Pagination.lastPage.split("?page=")[1];
    let body;
    if (!isLoaded) {
      body = <div>Loading...</div>;
    } else if (error) {
      body = <div>Error occured: {error}</div>;
    } else {
      // console.log(content["hydra:member"]);
      let products = content["hydra:member"].map((product) => 
        product.idCategory == window.location.href.split("category=")[1] ||
        product.status == window.location.href.split("used=")[1] ||
        product.title
          .toLowerCase()
          .includes(window.location.href.split("search=")[1]) ? (
          <div>
            <ProductCard
              id={product.id}
              title={product.title}
              picture={product.photo}
              price={product.price}
            />
          </div>
        ) : (
          ""
        )
      );
      body = <>{products}</>;
    }
    return <>{body}</>;
  }
}

export default Catalog;
