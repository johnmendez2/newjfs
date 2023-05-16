import Lottie from 'react-lottie';
import { SocialIcon } from 'react-social-icons';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fs } from '../Config/config';
import Footer from './Footer';
import Mission from './MIssion';

import animationData from '../Assets/129328-sport-fans-watching-match-on-tv.json';
import animationData2 from '../Assets/126572-football-team-players.json';
import onPhone from '../Assets/126569-soccer-online-broadcast.json';


import premlogo from "../Assets/prem.png";
import bundesliga from "../Assets/bundesliga.png";
import ligue1 from "../Assets/ligue1.jpg";
import laliga from "../Assets/laliga.png";
import seriea from "../Assets/seriea.png";

import retroshirts from "../Assets/cropped.jpg";

import italy from "../Assets/ITALY.png";
import spain from "../Assets/SPAIN.png";
import inter from "../Assets/INTER.png";

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

      const onPhoneoption = {
        loop: true,
        autoplay: true,
        animationData: onPhone,
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
        <div >
            <Navbar></Navbar>
            <div class='shippingmessage'>
                Free shipping in the UAE on orders over AED 200!
            </div>
            <div class="highlights">
                <h1 className='featuretext' style={{fontSize: '30px', color: 'black', display: 'flex', marginLeft: '50px', paddingTop: '5px' ,paddingBottom: '10px'}}>
                Featured this week:
                </h1>
                <div class="productdisplayforhighlights">
                {products.map((product) => (
  <div>
    <div class="square" onClick={()=> navigate(`/${product.id}-${product.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}>
      <img class="square-content" src={product.url} />
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
                    <img class="square-content" src={premlogo} style={{height:'200px'}}/>
                </div>
                <div class="squareLeague" onClick={()=> navigate(`/products/bundesliga`)}>
                <img class="square-content" src={bundesliga} style={{height:'200px'}}/>
                </div>
                <div class="squareLeague" onClick={()=> navigate(`/products/ligue1`)}>
                <img class="square-content" src={ligue1} style={{height:'180px'}}/>
                </div>
                <div class="squareLeague" onClick={()=> navigate(`/products/laliga`)}>
                <img class="square-content" src={laliga} style={{height:'200px'}}/>
                </div>
                <div class="squareLeague" onClick={()=> navigate(`/products/seriea`)}>
                <img class="square-content" src={seriea} style={{height:'200px'}}/>
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
  <p style={{ fontSize: '1.2rem', width: '95%' }}>We've got a huge range of modern and vintage football shirts from all your favorite teams - take your pick! And the best part? Our authentic jerseys are guaranteed to make you feel like part of the team without breaking the bank. So why wait? Head on over and find the perfect shirt to show off your love for football and your favorite players.</p>
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
    <img className='hookimage' src={retroshirts} style={{ minHeight: "500px",height: "auto", width: '100%', marginTop: '4px'}}></img>
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
  <h2 style={{ marginBottom: '10px', fontSize: '2.2rem', fontWeight: 'bold' }}>For the players</h2>
  <p style={{ fontSize: '1.2rem', width: '95%' }}>We also source football shirts with player specifications up to the standards of what your heroes wear on the pitch. Whether you're a pro striving for excellence or an amateur looking to up your game, we've got you covered. Check out our player specification jerseys or message us to source one just for you!</p>
  <Link to={'/products'} className='shopnow' style={{color: 'white'}}> SHOP NOW</Link>
</div>
  </div>
</div>
<Mission/>
        <Footer/>
        </div>
    );
}

export default Homepage;