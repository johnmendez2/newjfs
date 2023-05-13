import Footer from "./Footer";
import Navbar from "./Navbar";
import Lottie from "react-lottie";
import animationData from '../FAQanimations/38219-verification-badge.json';
import animationData2 from '../FAQanimations/98455-delivery-truck.json';
import printing from '../FAQanimations/21397-man-using-printing-machine.json';
import wash from '../FAQanimations/3138-washing-machine.json';
import iron from '../FAQanimations/49860-ironing-people-animation.json'
export default function Faqs() {
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

    const printer = {
        loop: true,
        autoplay: true,
        animationData: printing,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const washing = {
        loop: true,
        autoplay: true,
        animationData: wash,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    
    const ironing = {
        loop: true,
        autoplay: true,
        animationData: iron,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Navbar />
            <div>
            <div className='shopvintagecard' style={{ marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '350px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
  <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '10px', fontSize: '36px', fontWeight: 'bold' }}>Are the shirts on the site authentic?</h2>
  <p style={{ fontSize: '24px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
</div>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
    <Lottie 
        options={defaultOptions}
        height={250}
        width={250}
      />

  </div>
</div>
                <div className='shopmoderncard' style={{marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '350px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                        <Lottie
                            options={defaultOptions2}
                            height={450}
                            width={450}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                        <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <h2 style={{ marginBottom: '10px', fontSize: '36px', fontWeight: 'bold' }}>Do you ship anywhere in the UAE?</h2>
                            <p style={{ fontSize: '24px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        </div>
                        
                    </div>          
                </div>


                <div className='shopvintagecard' style={{ marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '350px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
  <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '10px', fontSize: '36px', fontWeight: 'bold' }}>Do you source namesets?</h2>
  <p style={{ fontSize: '24px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
</div>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
    <Lottie 
        options={printer}
        height={350}
        width={450}
      />

  </div>
</div>


<div className='shopmoderncard' style={{marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '350px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                        <Lottie
                            options={washing}
                            height={350}
                            width={350}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                        <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <h2 style={{ marginBottom: '10px', fontSize: '36px', fontWeight: 'bold' }}>How do I take care of my shirts?</h2>
                            <p style={{ fontSize: '24px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                        </div>
                        
                    </div>          
                </div>


                <div className='shopvintagecard' style={{ marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '350px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
  <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '10px', fontSize: '36px', fontWeight: 'bold' }}>How do I fix a nameset that is peeling off?</h2>
  <p style={{ fontSize: '24px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
</div>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
    <Lottie 
        options={ironing}
        height={250}
        width={350}
      />

  </div>
</div>           
                
            </div>
            <Footer />
        </div>
    )
}