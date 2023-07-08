import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../Css/blogs.css';
import Lottie from 'react-lottie';
import Navbar from './Navbar';
import Footer from './Footer';
import Mobilecases from './Mobilepages/Mobilecasestudies';
import Cases from './Cases';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Blogs() {
  return (
    <HelmetProvider>
      <div>
      <div className='mobile'>
      <div>
        <Navbar/>
        <Helmet>
      <title>Blogs | John's Football Shirts</title>
              <meta name="description" content="Read through our blogs and articles of football culture." />
              <meta name="og:description" content="Read through our blogs and articles of football culture." />
              <link rel="canonical" href={`https://johnsfootballshirts.com/blogs`} />

            </Helmet>
      <div className="image-container">
      </div>
      <a id="caseStudiesmob">
      <Mobilecases/>
      </a>
        </div>
        <Footer />
      </div>



      <div className='desktop'>
      <Navbar />
      <Helmet>
      <title>Blogs | John's Football Shirts</title>
              <meta name="description" content="Read through our blogs and articles of football culture." />
              <meta name="og:description" content="Read through our blogs and articles of football culture." />
            </Helmet>
      <div className="image-container">
      </div>
      <a id="caseStudies">
        <Cases/>
      </a>

        <Footer />
      </div>
    </div>
    </HelmetProvider>
    
  );
}

export default Blogs;
