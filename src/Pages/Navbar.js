import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../Assets/126412-fans.json';
import '../Css/navbar.css';
import jfslogo from '../Assets/jfslogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
    const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div >
            <div className="navbar">
      <div className="logo-container">
        <img className='jfslogo' src={jfslogo} alt="JFS logo" onClick={()=> navigate(`/`)}/>
      </div>
      <div className="search-icon-container" onClick={handleSearchClick}>
        <FontAwesomeIcon icon={faSearch} />

      </div>
      <div className='collection'  onClick={()=> navigate(`/products`)}>SHOP</div>
        <div className='faqs'onClick={()=> navigate(`/FAQ's`)}>FAQ'S</div>
    </div>
    <div className={`search-container ${searchOpen ? 'open' : ''}`}>
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit">Go</button>
        </form>
        
      </div>
    </div>
  );
}

export default Navbar;
