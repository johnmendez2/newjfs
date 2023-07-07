import React from "react";
import "../Css/productcard.css";
import { Link, useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();
  return (
    <Link to={`${props.url}`} style={{textDecoration:'none',color:'inherit'}}>
     <div className="product-card" >
      <div className="product-image">
        <img src={props.imageSrc} alt={props.productName} />
      </div>
      <div className="product-name">{props.productName}</div>
      <div className="product-size">{props.size}</div>
      <div className="product-size">AED {props.price}</div>
      <button className="view-details-btn" >VIEW DETAILS</button>
    </div>
    </Link>
  );
}
