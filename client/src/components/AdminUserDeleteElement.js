import React from "react";
import axios from "axios";

export default class AdminUserDeleteElement extends React.Component {
  state = {
    id: window.location.href.split("?id=")[1],
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(`http://127.0.0.1:8000/api/users/${this.state.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("User successfully deleted.");
        window.location.href = "/admin-user-delete";
      });
  };

  render() {
    return (
      <div>
        <h1 className="f4 bold center mw6 tc">
          Delete ID {window.location.href.split("?id=")[1]}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="hidden"
            name="id"
            value={window.location.href.split("?id=")[1]}
          />
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
