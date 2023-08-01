import React from "react";
import Navbar from "./Navbar";
import '../Css/shirtpage.css'
import Footer from "./Footer";
import { fs } from '../Config/config';
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { doc, updateDoc, increment } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

async function fetchProductData(urlId) {
  try {
    const docRef = fs.collection("NEWwebsiteProducts").doc(urlId);
    const doc = await docRef.get();
    return doc.exists; // Return whether the document exists or not
  } catch (error) {
    console.log("Error getting document:", error);
    return false;
  }
}

export default function ShirtPage() {
  const location = useLocation();
  const urlId = location.pathname.split('-')[0].split('/').pop().slice(-20);
  const [prod, setProduct] = useState('');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProd() {
      const isProductExists = await fetchProductData(urlId);
      if (isProductExists) {
        try {
          const docRef = fs.collection("NEWwebsiteProducts").doc(urlId);
          const doc = await docRef.get();
          if (doc.exists) {
            const a = doc.data();
            setProduct(a);
          } else {
            console.log("No such document!");
            navigate("/"); // Redirect to homepage if document doesn't exist
          }
        } catch (error) {
          console.log("Error getting document:", error);
          navigate("/"); // Redirect to homepage on error
        }
      } else {
        console.log("Product not found!");
        navigate("/"); // Redirect to homepage if product doesn't exist in Firebase
      }
    }

    getProd();
  }, [urlId, navigate]);

  function ShowImg() {
    if (prod.imgurl2 == "") {
      return <img className="square-contentShirtPage" src={prod.url} alt={prod.title} />
    } else {
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
  


  useEffect(() => {
    const fetchData = async () => {
      if (prod.price && prod.league) {
        const prodPrice = prod.price;
  
        // Calculate the lower and upper bounds of the price range
        const lowerBound = prodPrice - (prodPrice * 0.2);
        const upperBound = prodPrice + (prodPrice * 0.2);
  
        const productsByPrice = await fs
          .collection("NEWwebsiteProducts")
          .where("price", ">=", lowerBound)
          .where("price", "<=", upperBound)
          .get();
  
        const productsByLeague = await fs
          .collection("NEWwebsiteProducts")
          .where("league", "==", prod.league)
          .get();
  
        const featuredproducts = await fs
          .collection("NEWwebsiteProducts")
          .where("featured", "==", "yes")
          .get();
  
        const productsArray = [];
        productsByPrice.forEach((doc) => {
          productsArray.push({ id: doc.id, ...doc.data() });
        });
  
        productsByLeague.forEach((doc) => {
          productsArray.push({ id: doc.id, ...doc.data() });
        });
        const idSet = new Set();

        let filteredProductsArray= [];
productsArray.forEach((product) => {
  if (!idSet.has(product.id)) {
    idSet.add(product.id);
    filteredProductsArray.push(product);
  }
});
        // Filter out objects with the same title as prod.title
         filteredProductsArray = filteredProductsArray.filter(
          (product) => product.title !== prod.title
        );

        if (filteredProductsArray.length === 0) {
          featuredproducts.forEach((doc) => {
            filteredProductsArray.push({ id: doc.id, ...doc.data() });
          });
        }

        
  
        setProducts(filteredProductsArray);
      }
    };
  
    fetchData();
  }, [prod.price, prod.league]);


  useEffect(() => {
  }, [prod])

  function navigateToProduct(product){
    navigate(`/${product.id}-${product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)
    window.location.reload()
  }


  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowFooter(true);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);


  const [startIndex, setStartIndex] = useState(0);


  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 3, products.length - 1));
  };

  const handleProductView = async (productId) => {
    try {
      // Get a reference to the Firestore document
      const db = getFirestore();
      const productRef = doc(db, 'NEWwebsiteProducts', productId);
  
      // Log the productRef to ensure it's valid
      console.log('Product Reference:', productRef);
  
      // Update the "views" field using the updateDoc function with an atomic increment
      await updateDoc(productRef, { views: increment(1) });
  
      console.log('Firestore update successful.');
    } catch (error) {
      console.error('Firestore update error:', error);
    }
    window.location.reload(); // Force a full page refresh
  };

  const handleClick = async (productID) => {
    console.log('Product ID to update views:', productID); // Ensure that the product ID is correct
  
    // Call the handleProductView function to update views
    handleProductView(productID);
  };


  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>{prod.title}</title>        
          <meta name="og:title" content={prod.title}></meta>
          <meta name="og:description" content={prod.description} />
          <meta name="description" content={prod.description} />
          <link rel="canonical" href={window.location} />
        </Helmet>
        <Navbar />
        {showFooter && <div className="mobile-layout">
          <div class='shippingmessage'>
            Free shipping in the UAE on orders over AED 200!
          </div>
          <div className="mobile-top">
          <h1 className="shirtname">
                  <strong>{prod.title} {prod.condition}</strong>
                </h1>
            <ShowImg />
            <button className="depop-btn" onClick={() => window.open(prod.depopURL)}>BUY VIA DEPOP</button>
          </div>
          <div className="mobile-bottom">
            <h2>Size: {prod.size}</h2>
            {prod.discountedPrice ? (
  <h2>
    <span className="original-price">AED {prod.price}</span>
    <span className="discounted-price">AED {prod.discountedPrice}</span>
  </h2>
) : (
  <h2>AED {prod.price}</h2>
)}
            <div className="description">
              {prod.description}
            </div>
            <h2>Shipping:</h2>
            <div className="description">
              Delivery all over the UAE for AED 25. Free delivery on orders over AED 200.
            </div>
          </div>
          <div class="highlights" style={{height:'380px'}}>
            <h2 className='featuretext' style={{ fontSize: '30px', color: 'black', display: 'flex', marginLeft: '50px', paddingTop: '5px', paddingBottom: '10px' }}>
              More you might like:
            </h2>
            <div class="productdisplayforhighlights">
              {products.map((product) => (
                <div className='squareboxforfeatured' style={{ padding: '10px', marginLeft: '25px', marginRight: '25px' }}>
                  <div class="square" onClick={() =>  {handleClick(product);}}>
                    <img class="square-content" src={product.url} alt='featuredimage' />
                  </div>
                  <h2 className='featuredcontenttext' style={{ textAlign: "center", fontSize: '1.2rem', minHeight: '42px' }}>{product.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        }
        {showFooter && <div className="desktop-layout">
          <div class='shippingmessage'>
            Free shipping in the UAE on orders over AED 200!
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1 }}>
              {/* Product images go here */}
              <div className="squareShirtPage">
                
                <ShowImg />
              </div>
            </div>

            <div style={{ flex: 1 }}>

              <div className="productDesc">

                <h1 className="shirtname">
                  <strong>{prod.title} {prod.condition}</strong>
                  
                </h1>
                {prod.discountedPrice ? (
  <h2>
    <span className="original-price">AED {prod.price} </span>
    <span className="discounted-price">AED {prod.discountedPrice}</span>
  </h2>
) : (
  <h2>AED {prod.price}</h2>
)}
                <h2 style={{ fontWeight: '200', fontSize: '20px' }}>Size: {prod.size}</h2>
                <p className="description">
                  {prod.description}
                </p>
                <button className="depop-btn" onClick={() => window.open(prod.depopURL)}>BUY VIA DEPOP</button>
                <h3>Shipping:</h3>
                <p className="description">
                  Delivery all over the UAE for AED 25. Free delivery on orders over AED 200.
                </p>
              </div>
            </div>
            
          </div>
          <div className="highlights" style={{ height: '680px' }}>
      <h2 className="featuretext" style={{ fontSize: '28px', color: 'black', display: 'flex', marginLeft: '50px', paddingTop: '105px', paddingBottom: '10px' }}>
        More you might like:
      </h2>
      <div className="productdisplayforhighlights" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <button onClick={handlePrev} style={{ fontSize: '50px', color: 'black', background: 'none', border: 'none', cursor: 'pointer', position: 'absolute', left: '9vw', top: '50%', transform: 'translateY(-50%)' }}>{"<"}</button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8vw' }}>
          {products.slice(startIndex, startIndex + 3).map((product) => (
            <div className="squareboxforfeatured" key={product.id} style={{ padding: '10px' }}>
              <div className="square" style={{ height: '300px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link to={`/${product.id}-${product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                <img className="square-content" style={{ height: '300px', maxWidth: '100%' }} src={product.url} alt="featuredimage" onClick={() => {handleClick(product.id)}}/>
                </Link>
              </div>
              <h2 className="featuredcontenttext" style={{ textAlign: 'center', fontSize: '16px', minHeight: '42px', width: '300px'  }}>{product.title}</h2>
            </div>
          ))}
        </div>
          <button onClick={handleNext} style={{ fontSize: '50px', color: 'black', background: 'none', border: 'none', cursor: 'pointer', position: 'absolute', right: '9vw', top: '50%', transform: 'translateY(-50%)' }}>{">"}</button>
      </div>
    </div>
        </div>}
        <Footer />
      </div>
    </HelmetProvider>

  );
}
