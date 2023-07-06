import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../Assets/126412-fans.json';
import '../Css/navbar.css';
import jfslogo from '../Assets/jfslogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleGo = (e) => {
    e.preventDefault();
    const searchText = e.target.previousSibling.value;
    navigate(`/products/search=${searchText}`);
    setSearchOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo-container">
          <img
            className="jfslogo"
            src={jfslogo}
            alt="JFS logo"
            onClick={() => navigate(`/`)}
          />
        </div>
        <div className="search-icon-container" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div
            className="collection"
            onClick={() => navigate(`/products`)}
          >
            SHOP
          </div>
          <div className="collection" onClick={() => navigate(`/FAQs`)}>
            FAQ'S
          </div>
          <div className="giveaways" onClick={() => navigate(`/blogs`)}>
          BLOGS
          </div>
          
        <div className="hamburgericon" onClick={handleMenuClick}>
          <FontAwesomeIcon color="white" icon={faBars} height={'20px'} />
        </div>

      </div>
      <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
          <div
            className="collection"
            onClick={() => navigate(`/products`)}
          >
            SHOP
          </div>
          <div className="faqs" onClick={() => navigate(`/FAQs`)}>
            FAQ'S
          </div>
          <div className="faqs" onClick={() => navigate(`/blogs`)}>
          BLOGS
          </div>
        </div>
      <div className={`search-container ${searchOpen ? 'open' : ''}`}>
        <form>
          <input type="text" placeholder="Search store here..." />
          <button type="submit" onClick={handleGo}>Go</button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
