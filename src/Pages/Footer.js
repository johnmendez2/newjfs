import { SocialIcon } from "react-social-icons"
import Lottie from "react-lottie"
import onPhone from '../Assets/126569-soccer-online-broadcast.json';
import '../Css/footer.css'
export default  function Footer(){
    const onPhoneoption = {
        loop: true,
        autoplay: true,
        animationData: onPhone,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
    <div className='footer'>
    <SocialIcon className="instaicon" bgColor='white' url="https://instagram.com/johnsfootballshirts" style={{ marginRight: '15px', marginTop: '2px'}}></SocialIcon>  <h1 className="followtext" style={{fontSize:'1.1rem'}}>Join the community! Follow us at @johnsfootballshirts</h1>
      <div className="footerlottie">
      <Lottie 
        options={onPhoneoption}
        height={150}
        width={150}
      />
      </div>
</div>
)
}