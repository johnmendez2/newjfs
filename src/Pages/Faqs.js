import Footer from "./Footer";
import Navbar from "./Navbar";
import Lottie from "react-lottie";
import animationData from '../FAQanimations/38219-verification-badge.json';
import animationData2 from '../FAQanimations/98455-delivery-truck.json';
import printing from '../FAQanimations/21397-man-using-printing-machine.json';
import wash from '../FAQanimations/3138-washing-machine.json';
import iron from '../FAQanimations/49860-ironing-people-animation.json'
import '../Css/faqs.css'
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
            <div className="mobilefaq">
            <div className='imgrightfaq' style={{ marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '300px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
  <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '10px', fontSize: '25px', fontWeight: 'bold' }}>Are the shirts on the site authentic?</h2>
  <p style={{ fontSize: '14px' }}>All the shirts on our site are authentics, we take pride on ensuring the keenest of eyes to source genuine football shirts. </p>
</div>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
    <Lottie 
        options={defaultOptions}
        height={120}
        width={100}
      />

  </div>
</div>

<div className='shopmoderncard' style={{marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '300px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                        <Lottie
                            options={defaultOptions2}
                            height={120}
                            width={100}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                        <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <h2 style={{ marginBottom: '10px', fontSize: '25px', fontWeight: 'bold' }}>Do you ship anywhere in the UAE?</h2>
                            <p style={{ fontSize: '14px' }}>Yes! we offer shipping all over the UAE for a flat rate of AED 25. We also offer free shipping for any orders over AED 200.</p>
                        </div>
                        
                    </div>          
                </div>


                <div className='imgrightfaq' style={{ marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '300px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
  <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '10px', fontSize: '25px', fontWeight: 'bold' }}>Do you source namesets?</h2>
  <p style={{ fontSize: '14px' }}>Absolutely! we can source namesets for your shirts. Please send us a message to inquire about the availability and pricing of your desired nameset.</p>
</div>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
    <Lottie 
        options={printer}
        height={120}
        width={100}
      />

  </div>
</div>


<div className='shopmoderncard' style={{marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '300px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                        <Lottie
                            options={washing}
                            height={120}
                            width={100}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                        <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <h2 style={{ marginBottom: '10px', fontSize: '25px', fontWeight: 'bold' }}>How do I take care of my shirts?</h2>
                            <p style={{ fontSize: '14px' }}>To keep your shirts looking great, we recommend washing them inside out in cold water, and hanging them to dry. Avoid using bleach or fabric softeners, as they can damage the shirt's fabric. Please also adhere to wash instructions as described in the wash tags on the inside of your shirts.</p>
                        </div>
                        
                    </div>          
                </div>


                <div className='imgrightfaq' style={{ marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '300px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
  <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '10px', fontSize: '25px', fontWeight: 'bold' }}>How do I fix a nameset that is peeling off?</h2>
  <p style={{ fontSize: '14px' }}>If your nameset is peeling off, place a piece of cloth or parchment paper over the nameset, and apply the iron with firm pressure for a few seconds at a time. Be sure to let the shirt cool down completely before wearing it again and ensure that you wash your shirt at least 48 hours after reapplying the nameset.</p>
</div>
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
    <Lottie 
        options={ironing}
        height={120}
        width={100}
      />

  </div>
</div>
            </div>
            <div className="desktopfaq">


            <div className='imgrightfaq' style={{ marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '350px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70%' }}>
  <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '10px', fontSize: '36px', fontWeight: 'bold' }}>Are the shirts on the site authentic?</h2>
  <p style={{ fontSize: '24px' }}>All shirts listed on our site are authentics, we take pride on ensuring the keenest of eyes to source genuine football kits in the best possible condition. Do note that some football shirts tend to wear out over a period of time so please do not hesitate to contact us if you need any more information. </p>
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
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70%' }}>
                        <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <h2 style={{ marginBottom: '10px', fontSize: '36px', fontWeight: 'bold' }}>Do you ship anywhere in the UAE?</h2>
                            <p style={{ fontSize: '24px' }}>Yes! we offer shipping all over the UAE for a flat rate of AED 25. We also offer free shipping for any orders over AED 200.</p>
                        </div>
                        
                    </div>          
                </div>


                <div className='imgrightfaq' style={{ marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '350px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70%' }}>
  <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '10px', fontSize: '36px', fontWeight: 'bold' }}>Do you source namesets?</h2>
  <p style={{ fontSize: '24px' }}>Absolutely! we can source namesets for your shirts. Please send us a message to inquire about the availability and pricing of your desired nameset.</p>
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
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70%' }}>
                        <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <h2 style={{ marginBottom: '10px', fontSize: '36px', fontWeight: 'bold' }}>How do I take care of my shirts?</h2>
                            <p style={{ fontSize: '24px' }}>To keep your shirts looking great, we recommend washing them inside out in cold water, and hanging them to dry. Avoid using bleach or fabric softeners, as they can damage the shirt's fabric. Please also adhere to wash instructions as described in the wash tags on the inside of your shirts.</p>
                        </div>
                        
                    </div>          
                </div>


                <div className='shopvintagecard' style={{ marginTop: '4px', display: 'flex', color: 'black', backgroundColor: 'white', height: '350px' }}>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70%' }}>
  <div style={{ width: '80%', height: '80%', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
  <h2 style={{ marginBottom: '10px', fontSize: '36px', fontWeight: 'bold' }}>How do I fix a nameset that is peeling off?</h2>
  <p style={{ fontSize: '24px' }}>If your nameset is peeling off, place a piece of cloth or parchment paper over the nameset, and apply the iron with firm pressure for a few seconds at a time. Be sure to let the shirt cool down completely before wearing it again and ensure that you wash your shirt at least 48 hours after reapplying the nameset. If you're unsure about how to fix a nameset, please send us a message and we'll be happy to assist you.</p>
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