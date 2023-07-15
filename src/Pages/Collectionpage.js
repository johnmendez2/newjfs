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
  const [sortBy, setSortBy] = useState(""); // Step 1
  const navigate = useNavigate();
  const location = useLocation();
  const [isFetching, setIsFetching] = useState(true);
  let league = "";

  useEffect(() => {
    const getProducts = async () => {
      let query = fs.collection("NEWwebsiteProducts").where("appear", "==", "yes");
      if (location.pathname.split("/")[2] && location.pathname.split("/")[2] === 'new') {
        query = query.where("latest", "==", "yes")
      }
      // Check if league parameter is provided in the URL
      if (location.pathname.split("/")[2] && location.pathname.split("/")[2] === 'grl') {
        query = query.where("grail", "==", "yes")
      }
      if (location.pathname.split("/")[2] && location.pathname.split("/")[2].length > 3) {
        league = location.pathname.split("/")[2];
        query = query.where("league", "==", league);
      }

      // Check if search parameter is provided in the URL
      const search = window.location.href.split("search=")[1];
      if (search) {
        const allProducts = await fs.collection("NEWwebsiteProducts").get();
        const products = allProducts.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        const fuse = new Fuse(products, {
          keys: ['title', 'league'],
          includeScore: true,
          threshold: 0.34,
          ignoreLocation: true,
          ignoreFieldNorm: true
        })

        const matchingProducts = fuse.search(search).map((result) => result.item);
        setProducts(matchingProducts);
      }
      else {
        const products = await query.get();
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

  let sortedProducts = [...products]; // Step 2

  if (sortBy === "price-low-to-high") {
    sortedProducts.sort((a, b) => a.price - b.price); // Sort by price ascending
  } else if (sortBy === "price-high-to-low") {
    sortedProducts.sort((a, b) => b.price - a.price); // Sort by price descending
  }

  return (
    <HelmetProvider>
      <div>
        <Navbar />
        <Helmet>
          <title>Products | John's Football Shirts</title>
          <meta name="description" content="Browse through beautiful football shirts past and present." />
          <link rel="canonical" href={`https://johnsfootballshirts.com/products`} />
        </Helmet>
        <div className="collection-page">
          {isFetching ? (
            <h2 style={{ textAlign: 'center' }}>Fetching products...</h2>
          ) : (
            <>
              <h2 className="showing">Showing {products.length} {products.length > 1 ? "products" : "product"}</h2>
              <div className="product-cards-container">
                {sortedProducts.length > 1 && (
                  <div className="sort-container">
                    <label htmlFor="sort-by-price">Sort by:</label>
                    <select
                      id="sort-by-price"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="">None</option>
                      <option value="price-low-to-high">Price (Low to High)</option>
                      <option value="price-high-to-low">Price (High to Low)</option>
                    </select>
                  </div>
                )}
                {sortedProducts.length > 0 ? (
                  sortedProducts.map((product) => (
                    <ProductCard
                    key={product.id}
                    imageSrc={product.url}
                    imageSrc2={product.imgurl2} // Pass the second image URL prop
                    productName={product.title}
                    price={product.price}
                    discountedPrice={product.discountedPrice}
                    size={product.size}
                    url={`/${product.id}-${product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  />
                  ))
                ) : (
                  <h2>Your search returned no results.</h2>
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
