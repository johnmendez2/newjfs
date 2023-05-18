import animationData from '../Assets/126279-soccer-sport-trophy-with-soccer-ball-and-shoes.json';
import Lottie from 'react-lottie';
export default function Mission() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "500px",
          maxWidth: '87%',
          margin: '0 auto',
        }}
      >
        <h1 style={{fontSize: '32px'}}>OUR MISSION</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
    <Lottie 
        options={defaultOptions}
        height={150}
        width={200}
      />

  </div>
        <p style={{fontSize: '1.1rem', maxWidth: '80%', marginBottom: '25px'}}>
        We believe that football shirt collecting should be accessible to everyone at any budget. Our mission is to spread the love of football in a community that shares the passion for the game.  We believe that everyone should have access to the grails they are looking for and we bring the game closer to you by offering authentic shirts at affordable prices. Join us on our mission, Joga Bonito!
        </p>
      </div>
    );
  }
  
