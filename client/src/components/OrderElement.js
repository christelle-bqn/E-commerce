import React from "react";

const OrderElement = (props) => {
  return (
    <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">
        {props.title}
      </h1>
      <div className="pa3 bt b--black-10">
        <p className="f6 f5-ns lh-copy measure">
          <dl class="lh-title pa4 mt0">
            <dt class="f6 b">Total cost</dt>
            <dd class="ml0">€{props.cost}</dd>
            <dt class="f6 b mt2">Date</dt>
            <dd class="ml0">{props.date}</dd>
            <dt class="f6 b mt2">Delivery address</dt>
            <dd class="ml0">
              {props.deliveryAddress.name + " " + props.deliveryAddress.surname}
              <br></br>
              {props.deliveryAddress.street +
                ", " +
                props.deliveryAddress.country +
                ", " +
                props.deliveryAddress.zipcode}
            </dd>
            <dt class="f6 b mt2">Phone number</dt>
            <dd class="ml0">{props.deliveryAddress.phone}</dd>
            <dt class="f6 b mt2">Items purchased</dt>
            <dd class="ml0">
              {props.products.map((product) => {
                return (
                  <>
                    {product.substr(0, 50)}
                    <br />
                  </>
                );
              })}
            </dd>
            <dt class="f6 b mt2">Status</dt>
            <dd class="ml0">{props.status}</dd>
          </dl>
        </p>
      </div>
    </article>
  );
};

export default OrderElement;
