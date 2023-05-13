import React from "react";
import Shirt from "./Shirt";
import "../Css/productcard.css";
export default function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.imageSrc} alt={props.productName} />
      </div>
      <div className="product-name">{props.productName}</div>
      <div className="product-size">{props.size}</div>
      <div className="product-size">AED {props.price}</div>
      <button className="view-details-btn">VIEW DETAILS</button>
    </div>
  );
}
