import React, { useState } from "react";
import "../Css/productcard.css";
import { Link, useNavigate } from "react-router-dom";
import { doc, updateDoc, increment } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function ProductCard(props) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleProductView = async () => {
    try {
      // Get a reference to the Firestore document
      const db = getFirestore();
      const productRef = doc(db, 'NEWwebsiteProducts', props.productId);

      // Update the "views" field using the updateDoc function with an atomic increment
      await updateDoc(productRef, { views: increment(1) });

      console.log('Firestore update successful.');
    } catch (error) {
      console.error('Firestore update error:', error);
    }
  };

  const handleClick = () => {
    handleProductView(); // Call the handleProductView function to update views
  };

    // State to track if the full-resolution image is loaded
    const [imageLoaded, setImageLoaded] = useState(false);

    // Event handler for when the full-resolution image is loaded
    const handleImageLoad = () => {
      setImageLoaded(true);
    };
  return (
      <div
        className={`product-card ${hovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Conditionally render the "SALE" badge */}
        {props.discountedPrice && <div className="sale-badge">PRICE DROP</div>}
        <div className="views-count">
    <FontAwesomeIcon icon={faEye} className="eye-icon" />  &nbsp; 
    {props.views}
  </div>
        {/* Rest of the product card content */}
        <div className="product-image">
        <Link to={`${props.url}`} style={{ textDecoration: "none", color: "inherit" }}>
          <img src={props.imageSrc} alt={props.productName} 
          loading="lazy"
          className={hovered ? "lazy-loaded" : ""}/>
          {props.imageSrc2 && (
            <img
              src={props.imageSrc2}
              alt={props.productName}
              className={`second-image ${hovered ? "show" : ""}`}
            />
          )}
          </Link>
        </div>
        <div className="product-name"><Link to={`${props.url}`} style={{ textDecoration: "none", color: "inherit" }}>{props.productName}</Link></div>
        <div className="product-size">{props.size}</div>
        {props.discountedPrice ? (
          <div className="product-price">
            <span className="original-price">AED {props.price}</span>
            <span className="discounted-price">AED {props.discountedPrice}</span>
          </div>
        ) : (
          <div className="product-price">AED {props.price}</div>
        )}
        
        <button className="view-details-btn"><Link to={`${props.url}`} style={{ textDecoration: "none", color: "inherit" }}>VIEW DETAILS</Link></button>
              </div>
  );
}
