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
          maxWidth: '80%',
          margin: '0 auto',
        }}
      >
        <h1 style={{fontSize: '1.8rem'}}>OUR MISSION</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
    <Lottie 
        options={defaultOptions}
        height={150}
        width={250}
      />

  </div>
        <p style={{fontSize: '1rem', maxWidth: '80%'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </p>
      </div>
    );
  }
  