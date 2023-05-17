import React from "react";
import Navbar from "./Navbar";
import '../Css/shirtpage.css'
import Footer from "./Footer";
import { fs } from '../Config/config';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function ShirtPage() {
  const location = useLocation();
  const urlId = location.pathname.split('-')[0].split('/').pop();
  console.log(urlId);
  async function getProd() {
    try {
      const docRef = fs.collection("NEWwebsiteProducts").doc(urlId);
      const doc = await docRef.get();
      if (doc.exists) {
        const a = doc.data();
        setProduct(a);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  }
const[prod, setProduct] = useState('');

function ShowImg(){
  if (prod.imgurl2 ==""){
    return <img className="square-contentShirtPage" src={prod.url} alt={prod.title} />
  } else{
    const images = [
        {
          original: prod.url,
          thumbnail: prod.url,
          class: "square-contentShirtPage"
          
        },
        {
          original: prod.imgurl2,
          thumbnail: prod.imgurl2,
          class: "square-contentShirtPage"
        },

      ];
      return <ImageGallery className="square-contentShirtPage" items={images} />;
}
}

useEffect(()=>{        
    getProd();
},[])  
useEffect(()=>{
    console.log(prod)
}, [prod])



const [showFooter, setShowFooter] = useState(false);
useEffect(() => {
  const timeoutId = setTimeout(() => {
    setShowFooter(true);
  }, 1000);
  return () => clearTimeout(timeoutId);
}, []);


  return (
    <HelmetProvider>
      <div>
      <Helmet>
          <title>{prod.title}</title>
          <meta name="description" content={prod.description} />
        </Helmet>
      <Navbar />
      {showFooter && <div className="mobile-layout">
      <div class='shippingmessage'>
                Free shipping in the UAE on orders over AED 200!
            </div>
        <div className="mobile-top">
        <div className="shirtname">
            <strong>{prod.title} {prod.condition}</strong>
          </div>
          <ShowImg/>
          <button className="depop-btn" onClick={() => window.open(prod.depopURL)}>BUY VIA DEPOP</button>
        </div>
        <div className="mobile-bottom">
          <h2>Size: {prod.size}</h2>
          <h2> Price: AED {prod.price}</h2>
          <div className="description">
            {prod.description}
          </div>
          <h2>Shipping:</h2>
          <div className="description">
            Delivery all over the UAE for AED 25. Free delivery on orders over AED 200.
          </div>
        </div>
      </div>}

      
      {showFooter && <div className="desktop-layout">
      <div class='shippingmessage'>
                Free shipping in the UAE on orders over AED 200!
            </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            {/* Product images go here */}
            <div className="squareShirtPage">
              <ShowImg/>
            </div>
          </div>
          
          <div style={{ flex: 1 }}>
            
            <div className="productDesc">
              
              <div className="shirtname">
                <strong>{prod.title} {prod.condition}</strong>
              </div>
              <h2>AED {prod.price}</h2>
              <h2 style={{fontWeight:'200', fontSize:'20px'}}>Size: {prod.size}</h2>
              <div className="description">
                {prod.description}
              </div>
              <button className="depop-btn" onClick={() => window.open(prod.depopURL)}>BUY VIA DEPOP</button>
              <h2>Shipping:</h2>
              <div className="description">
                Delivery all over the UAE for AED 25. Free delivery on orders over AED 200.
              </div>
            </div>
          </div>
        </div>
      </div>}
      <Footer />
    </div>
    </HelmetProvider>
  
  );
}
