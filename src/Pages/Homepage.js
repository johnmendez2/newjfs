import Lottie from 'react-lottie';
import { SocialIcon } from 'react-social-icons';
import { useNavigate } from 'react-router-dom';
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

    return (
        <div >
            <Navbar></Navbar>
            <div class='shippingmessage'>
                Free shipping in the UAE on orders over AED 200!
            </div>
            <div class="highlights">
                <h1 style={{fontSize: '30px', color: 'black', display: 'flex', marginLeft: '50px', paddingTop: '5px' ,paddingBottom: '10px'}}>
                Featured this week:
                </h1>
                <div class="productdisplayforhighlights">
                <div class="square" onClick={()=> navigate(`/shirtpage`)}>
                <img class="square-content" src={italy} />
                </div>
                <div class="square">
                <img class="square-content" src={spain} />
                </div>
                <div class="square">
                <img class="square-content" src={inter} />
                </div>
                </div>
            </div>
            <div className='shopbyleague' >
            <h1 style={{fontSize: '26px', color: 'white', display: 'flex', marginLeft: '20px', paddingTop: '20px', paddingBottom: '10px'}}>
                Shop by league
                </h1>

                <div class="productdisplayforhighlights">
                <div class="squareLeague">
                    <img class="square-content" src={premlogo} style={{height:'200px'}}/>
                </div>
                <div class="squareLeague">
                <img class="square-content" src={bundesliga} style={{height:'200px'}}/>
                </div>
                <div class="squareLeague">
                <img class="square-content" src={ligue1} style={{height:'180px'}}/>
                </div>
                <div class="squareLeague">
                <img class="square-content" src={laliga} style={{height:'200px'}}/>
                </div>
                <div class="squareLeague">
                <img class="square-content" src={seriea} style={{height:'200px'}}/>
                </div>
                </div>
                <h1 class='viewmore'>
                VIEW MORE
                </h1>
            </div>
            <div className='shopvintagecard' style={{ marginTop: '4px', display: 'flex', color: 'white', backgroundColor: 'black', height: '350px' }}>
  <div className='cardhalfwithtextbox' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
  <div className='textboxborder'>
  <h2 style={{ marginBottom: '10px', fontSize: '2.2rem', fontWeight: 'bold' }}>For the fans</h2>
  <p style={{ fontSize: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
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
    <img src={retroshirts} style={{ minHeight: "500px",height: "auto", width: '100%', marginTop: '4px'}}></img>
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
  <p style={{ fontSize: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
</div>
  </div>
</div>
<Mission/>
        <Footer/>
        </div>
    );
}

export default Homepage;