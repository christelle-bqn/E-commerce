import React from "react";

const ProductCard = (props) => {
  return (
    <div className="fl w-50 w-25-m w-20-l pa2 product-card">
      <a
        className="no-underline"
        href={
          (window.location.href.split("admin-product-update")[1]
            ? "update"
            : "products") +
          "?id=" +
          props.id
        }
      >
        <div className="db link dim tc pointer">
          <img
            src={props.picture}
            alt={props.title}
            className="db outline black-10"
            style={{ height: "150px", width: "300px", objectFit: "cover" }}
          />
          <dl className="mt2 f6 lh-copy">
            <dd className="ml0 black truncate w-100">{props.title}</dd>
            <dd className="ml0 gray truncate w-100">€{props.price}</dd>
          </dl>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
