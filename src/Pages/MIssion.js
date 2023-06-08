import animationData from '../Assets/126279-soccer-sport-trophy-with-soccer-ball-and-shoes.json';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
export default function Mission() {
  const navigate = useNavigate();
  const navigatetoFAQ = () => {
    window.scrollTo(0, 0); // Scrolls the window to the top
    navigate(`/FAQs`, { target: '_blank' });
  }
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
        <p style={{fontSize: '1.1rem', maxWidth: '85%', marginBottom: '25px'}}>
        We believe in making football shirt collecting accessible to everyone. Our mission is to spread the love of
        football in a passionate community. We bring the game closer by offering authentic shirts at affordable prices.
        For any questions, check out the{' '}
        <span style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }} onClick={navigatetoFAQ}>
          FAQ page
        </span> or contact us for more info.
         Join us on our mission, Joga Bonito!
         </p>
      </div>
    );
  }
  
