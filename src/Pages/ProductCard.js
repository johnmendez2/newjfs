import React from "react";
import Shirt from "./Shirt";
import "../Css/productcard.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`${props.url}`)}>
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
