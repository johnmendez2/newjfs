import Lottie from 'react-lottie';
import animationData from '../Assets/126412-fans.json';

function Navbar() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
    <div style={{backgroundColor: '#4101ab'}}>
                    <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
    );
  }
  
  export default Navbar;