import React, { useState, useEffect } from "react";
import { auth, fs } from '../Config/config';
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";
import Fuse from 'fuse.js';
import "../Css/collectionpage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function CollectionPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      let query = fs.collection("NEWwebsiteProducts");
    
      // Check if league parameter is provided in the URL
      const league = location.pathname.split("/")[2];
      if (league) {
        query = query.where("league", "==", league);
      }
    
      // Check if search parameter is provided in the URL
      const search = window.location.href.split("search=")[1];
      console.log(search)
      if (search) {
        const allProducts = await fs.collection("NEWwebsiteProducts").get();
        const products = allProducts.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      
        const fuse = new Fuse(products, {
          keys: ['title'],
          includeScore: true,
          threshold: 0.4,
          ignoreLocation: true,
          ignoreFieldNorm: true
        });
      
        const matchingProducts = fuse.search(search).map((result) => result.item);
        setProducts(matchingProducts);
      }
      else {
        const products = await query.get();
        console.log("Products:", products.docs);
        const productsArray = [];
        products.docs.forEach((doc) => {
          productsArray.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productsArray);
      }    
      setIsFetching(false);
    };
    
    getProducts();
  }, [location]);

  return (
    <HelmetProvider>
          <div>
      <Navbar />
      <Helmet>
      <title>Products | John's Football Shirts</title>
              <meta name="description" content="Browse through beautiful football shirts past and present." />
            </Helmet>
      <div className="collection-page">
        {isFetching ? (
          <h2>Fetching products...</h2>
        ) : (
          <>
            <h2 className="showing">Showing {products.length} {products.length > 1 ? "products" : "product"}</h2>
                <div className="product-cards-container">
                {products.length > 0 ? (
              products.map((product) => (
                  <ProductCard
                    key={product.id}
                    imageSrc={product.url}
                    productName={product.title}
                    price={product.price}
                    size={product.size}
                    url = {`/${product.id}-${product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  />
              ))
            ) : (
              <h2 >Your search returned no results.</h2>
            )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
    </HelmetProvider>
  );
  
  
}
