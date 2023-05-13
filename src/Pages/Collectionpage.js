import ProductCard from "./ProductCard";
import italy from "../Assets/ITALY.png";
import spain from "../Assets/SPAIN.png";
import inter from "../Assets/INTER.png";
import Navbar from "./Navbar";
import "../Css/collectionpage.css"
import Footer from "./Footer";

export default function Collectionpage() {
  return (
    <div>
        <Navbar/>
        <div className="collection-page">
      <div className="product-cards-container">
        <ProductCard
          imageSrc={italy}
          productName="Italy '03 Home"
          price = "80"
          size="XL"
        />
        <ProductCard
          imageSrc={spain}
          productName="Spain '10 Home"
          price = "200"
          size="XL"
        />
        <ProductCard
          imageSrc={inter}
          productName="Inter '06 Home"
          price="150"
          size="XL"
        />
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}