import React from "react";
import animationData from '../Assets/10208-animated-giftbox.json';
import Lottie from 'react-lottie';
import Navbar from "./Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../Css/giveaways.css"
export default function Giveaways(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      return (
        <HelmetProvider>
          <div>
            <Helmet>
              <title>Giveaways | YourWebsite</title>
              <meta name="description" content="Participate in our football memorabilia giveaways and get a chance to win rare retro grails, signed gear, and other amazing football treasures. Follow us on Instagram @johnsfootballshirts for more details." />
            </Helmet>
            <Navbar />
            <div
              className="giveawaysbar"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "500px",
                maxWidth: '80%',
                margin: '0 auto',
              }}
            >
              <h1 style={{ fontSize: '32px', marginTop: '0px' }}>GIVEAWAYS</h1>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                <Lottie 
                  options={defaultOptions}
                  height={200}
                  width={250}
                />
              </div>
              <p style={{ fontSize: '1.5rem', maxWidth: '90%', marginBottom: '25px' }}>
                Want to grow your football memorabilia collection with some awesome items? Look no further! Follow us on Instagram @johnsfootballshirts and check out our pinned posts for a chance to win rare retro grails, signed gear, and other amazing football treasures. We're excited to share these giveaways with you and see your collection grow! Don't wait - join in on the fun now.
              </p>
            </div>
          </div>
        </HelmetProvider>
      );
}