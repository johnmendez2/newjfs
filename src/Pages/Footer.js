import { SocialIcon } from "react-social-icons"
import Lottie from "react-lottie"
import onPhone from '../Assets/126569-soccer-online-broadcast.json';
import { useNavigate } from "react-router-dom";
import '../Css/footer.css'
export default  function Footer(){
  const navigate = useNavigate();
  const navigateToInstagram = () => {
    window.location.href = 'https://instagram.com/johnsfootballshirts';
  };
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
    <SocialIcon className="instaicon" bgColor='white' url="https://instagram.com/johnsfootballshirts" style={{ marginRight: '15px', marginTop: '2px'}}></SocialIcon> <h1 onClick={navigateToInstagram} className="followtextmobile"> Follow us at @johnsfootballshirts </h1>  <h1 onClick={navigateToInstagram} className="followtext" style={{fontSize:'1.1rem', cursor:'pointer'}}>Join the community! Follow us at @johnsfootballshirts</h1>
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