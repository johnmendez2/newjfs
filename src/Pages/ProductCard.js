import React, { useState } from "react";
import "../Css/productcard.css";
import { Link, useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link to={`${props.url}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        className={`product-card ${hovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="product-image">
          <img src={props.imageSrc} alt={props.productName} />
          {props.imageSrc2 && (
            <img
              src={props.imageSrc2}
              alt={props.productName}
              className={`second-image ${hovered ? "show" : ""}`}
            />
          )}
        </div>
        <div className="product-name">{props.productName}</div>
        <div className="product-size">{props.size}</div>
        {props.discountedPrice ? (
          <div className="product-price">
            <span className="original-price">AED {props.price}</span>
            <span className="discounted-price">AED {props.discountedPrice}</span>
          </div>
        ) : (
          <div className="product-price">AED {props.price}</div>
        )}
        <button className="view-details-btn">VIEW DETAILS</button>
      </div>
    </Link>
  );
}
