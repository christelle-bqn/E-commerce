import React from "react";
import CartDelete from "./CartDelete";

export default class CartElement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td className="pv3 pr3 bb b--black-20">{this.props.name}</td>
        <td className="pv3 pr3 bb b--black-20">{this.props.quantity}</td>
        <td className="pv3 pr3 bb b--black-20">{this.props.price}</td>
        <td className="pv3 pr3 bb b--black-20">
          <a
            className="f6 link dim ph3 pv2 mb2 dib white bg-dark-red w3 tc"
            href={"/cart-delete?delete=" + this.props.id}
          >
            Toss
          </a>
        </td>
      </tr>
    );
  }
}
