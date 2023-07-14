import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../Assets/126412-fans.json';
import '../Css/navbar.css';
import jfslogo from '../Assets/jfslogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const popularSearches = ['barcelona', 'messi', 'liverpool'];
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

  const handleSearchbarClick = () => {
    setSearchClicked(!searchClicked);
  };

  const handleGo = (e) => {
    e.preventDefault();
    const searchText = e.target.previousSibling.value;
    navigate(`/products/search=${searchText}`);
    setSearchOpen(false);
  };

  const handlePopularSearch = (searchText) => {
    navigate(`/products/search=${searchText}`);
    setSearchOpen(false);
  };

  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setSearchClicked(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="navbar">
        <div className="logo-container">
          <Link to='/'>
          <img
            className="jfslogo"
            src={jfslogo}
            alt="JFS logo"
          ></img>
          </Link>
        </div>
        <div className="search-icon-container" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <a href="/products/new" className="collection">NEW&nbsp;&nbsp;ARRIVALS</a>
        <a href="/products" className="collection">SHOP</a>
<a href="/FAQs" className="collection">FAQ'S</a>
<a href="/blogs" className="giveaways">BLOGS</a>
          
        <div className="hamburgericon" onClick={handleMenuClick}>
          <FontAwesomeIcon color="white" icon={faBars} height={'20px'} />
        </div>

      </div>
      <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
      <a href="/products/new" className="collection">NEW&nbsp;&nbsp;ARRIVALS</a>
      <a href="/products" className="collection">SHOP</a>
<a href="/FAQs" className="faqs">FAQ'S</a>
<a href="/blogs" className="faqs">BLOGS</a>
        </div>
      <div className={`search-container ${searchOpen ? 'open' : ''}`}>
        <form onClick={handleSearchbarClick}>
          <input type="text" placeholder="Search store here..." />
          <button type="submit" onClick={handleGo}>Go</button>
        </form>
        {searchClicked && (
          <div className="popular-searches">
            <div className="popular-searches-header">
              Popular Searches <FontAwesomeIcon icon={faArrowTrendUp} width={'25px'} />
            </div>
            <ul>
              {popularSearches.map((search) => (
                <li
                  key={search}
                  onClick={() => {
                    handlePopularSearch(search);
                    handleSearchbarClick();
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} width={'16px'} />
                  {' '}
                  {search}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
