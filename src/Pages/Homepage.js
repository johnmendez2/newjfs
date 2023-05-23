import Lottie from 'react-lottie';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fs } from '../Config/config';
import Footer from './Footer';
import Mission from './MIssion';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import animationData from '../Assets/129328-sport-fans-watching-match-on-tv.json';
import animationData2 from '../Assets/126572-football-team-players.json';
import scrolldata from '../Assets/15424-scroll-down-animation.json';


import premlogo from "../Assets/prem.png";
import bundesliga from "../Assets/bundesliga.png";
import ligue1 from "../Assets/ligue1.png";
import laliga from "../Assets/laliga.png";
import seriea from "../Assets/seriea.png";

import retroshirts from "../Assets/cropped.jpg";

import Navbar from './Navbar';
import '../Css/homepage.css';
function Homepage() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const scrollright = {
        loop: true,
        autoplay: true,
        animationData: scrolldata,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };


      useEffect(() => {
        const getProducts = async () => {
          const products = await fs
            .collection("NEWwebsiteProducts")
            .where("featured", "==", "yes")
            .get();
          const productsArray = [];
          products.forEach((doc) => {
            productsArray.push({ id: doc.id, ...doc.data() });
          });
          setProducts(productsArray);
        };
        getProducts();
      }, []);

    return (
      <HelmetProvider>
        <div >
            <Navbar></Navbar>
            <Helmet>
          <meta charSet="utf-8" />
          <title>John's Football Shirts</title>
          {/* Add your meta tags here */}
          <meta name="description" content="Shop a wide range of authentic football shirts in Dubai. Find jerseys from top teams and players. Free shipping on orders over AED 200. Explore our collection now!" />
  <meta name="keywords" content="football shirts, jerseys, Dubai, buy online, authentic, top teams, players, free shipping" />
  <link rel="canonical" href="https://johnsfootballshirts.com/#" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  {/* Open Graph Tags */}
  <meta property="og:title" content="Football Shirts Dubai | Buy Authentic Jerseys Online | YourWebsite" />
  <meta property="og:description" content="Shop a wide range of authentic football shirts in Dubai. Find jerseys from top teams and players. Free shipping on orders over AED 200. Explore our collection now!" />
  <meta property="og:image" content="https://www.yourwebsite.com/images/og-image.jpg" />
  <meta property="og:url" content="https://www.yourwebsite.com/football-shirts-dubai" />


        </Helmet>
            <div class='shippingmessage'>
                Free shipping in the UAE on orders over AED 200!
            </div>
            <div class="highlights">
                <h1 className='featuretext' style={{fontSize: '30px', color: 'black', display: 'flex', marginLeft: '50px', paddingTop: '5px' ,paddingBottom: '10px'}}>
                Featured this week:
                </h1>
                <div className="maclottiescroll">
    <Lottie 
        options={scrollright}
        height={76}
        width={26}
      />
  </div>
                <div class="productdisplayforhighlights">
                {products.map((product) => (
  <div style={{padding: '10px', marginLeft: '25px', marginRight:'25px'}}>
    <div class="square" onClick={()=> navigate(`/${product.id}-${product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}>
      <img class="square-content" src={product.url} alt='featuredimage' />
    </div>
    <h1 style={{textAlign: "center", fontSize:'1.2rem', minHeight: '42px'}}>{product.title}</h1>
  </div>
))}

                </div>
            </div>
            <div className='shopbyleague' >
            <h1 style={{fontSize: '26px', color: 'white', display: 'flex', marginLeft: '20px', paddingTop: '20px', paddingBottom: '10px'}}>
                Shop by league
                </h1>

                <div class="leaguecontainer">
                <div class="squareLeague" onClick={()=> navigate(`/products/premierleague`)}>
                    <img class="league-content" alt='leaguelogo' src={premlogo} style={{height:'200px'}}/>
                </div>
                <div class="squareLeague" onClick={()=> navigate(`/products/bundesliga`)}>
                <img class="league-content" alt='leaguelogo' src={bundesliga} style={{height:'200px'}}/>
                </div>
                <div class="squareLeague" onClick={()=> navigate(`/products/ligue1`)}>
                <img class="league-content" alt='leaguelogo' src={ligue1} style={{height:'180px'}}/>
                </div>
                <div class="squareLeague" onClick={()=> navigate(`/products/laliga`)}>
                <img class="league-content" alt='leaguelogo' src={laliga} style={{height:'200px'}}/>
                </div>
                <div class="squareLeague" onClick={()=> navigate(`/products/seriea`)}>
                <img class="league-content" alt='leaguelogo' src={seriea} style={{height:'200px'}}/>
                </div>
                </div>
                <h1 class='viewmore' onClick={()=> navigate(`/products/`)}>
                VIEW MORE
                </h1>
            </div>
            <div className='shopvintagecard' style={{ marginTop: '4px', display: 'flex', color: 'white', backgroundColor: 'black', height: '350px' }}>
  <div className='cardhalfwithtextbox' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
  <div className='textboxborder'>
  <h2 style={{ marginBottom: '10px', fontSize: '2.2rem', fontWeight: 'bold' }}>For the fans</h2>
  <p className='textinsquare' style={{ fontSize: '1.2rem', width: '95%' }}>We've got a huge range of modern and vintage football shirts from all your favorite teams - take your pick! And the best part? Our authentic jerseys are guaranteed to make you feel like part of the team without breaking the bank. So why wait? Head on over and find the perfect shirt to show off your love for football and your favorite players.</p>
  <Link to={'/products'} className='shopnow' style={{color: 'white'}}> SHOP NOW</Link>
</div>
  </div>
  <div className="homepagelottie" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
    <Lottie 
        options={defaultOptions}
        height={350}
        width={550}
      />
  </div>
</div>
<div>
    <img className='hookimage' alt='spanofshirts' src={retroshirts} style={{ minHeight: "500px",height: "auto", width: '100%', marginTop: '4px'}}></img>
</div>
<div className='shopmoderncard' style={{ marginBottom: '4px',display: 'flex', color: 'white', backgroundColor: 'black', height: '350px'}}>

  <div className="homepagelottie animation-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
          <Lottie 
        options={defaultOptions2}
        height={350}
        width={350}
        
      />
  </div>
  <div className='cardhalfwithtextbox' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
  <div className='textboxborder'>
  <h2 style={{ marginBottom: '10px', fontSize: '2.2rem', fontWeight: 'bold' }}>For the collectors</h2>
  <p className='textinsquare' style={{ fontSize: '1.2rem', width: '95%' }}>Immerse yourself in our vast assortment of one-of-a-kind jerseys, spanning the rich history of football's past and present. From rare vintage gems to modern classics, our curated collection is a treasure trove for collectors. Expand your collection and showcase your love for football through these captivating pieces of history.</p>
  <Link to={'/products'} className='shopnow' style={{color: 'white'}}> SHOP NOW</Link>
</div>
  </div>
</div>
<Mission/>
        <Footer/>
        </div>
      </HelmetProvider>
      
    );
}

export default Homepage;