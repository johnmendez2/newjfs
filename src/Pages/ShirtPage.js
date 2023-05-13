import React from "react";
import Navbar from "./Navbar";
import italy from "../Assets/ITALY.png";
import '../Css/shirtpage.css'
import Footer from "./Footer";

export default function ShirtPage() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1 }}>
          {/* Product images go here */}
          <div className="squareShirtPage">
            <img class="square-contentShirtPage" src={italy} />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div className="productDesc">
            <div className="shirtname">
              <strong>Italy '03 Home</strong>
            </div>
            <h2>BNWT</h2>
            <h2>Size: XL</h2>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lobortis scelerisque lorem, vel commodo elit convallis vel. Duis
              ac luctus nibh. Quisque euismod convallis lorem vel sagittis.
              Praesent congue tortor sed erat bibendum, vel suscipit velit
              dapibus. Aliquam tristique purus sit amet tellus viverra, et
              feugiat ante vestibulum.
            </div>
            <button className="depop-btn">BUY VIA DEPOP</button>
            <h2>Shipping:</h2>
            <div className="description">
              Delivery all over the UAE for AED 25. Free delivery on orders over AED 200.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
