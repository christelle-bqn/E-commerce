import React from "react";
import axios from "axios";

export default class ProductDelete extends React.Component {
  state = {
    id: window.location.href.split("?id=")[1],
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(`http://127.0.0.1:8000/api/products/${this.state.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("Product successfully deleted.");
        window.location.href = "/admin-product-update?search=";
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="hidden"
            name="id"
            value={window.location.href.split("?id=")[1]}
          />
          <button
            type="submit"
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          >
            Delete
          </button>
        </form>
      </div>
    );
  }
}
