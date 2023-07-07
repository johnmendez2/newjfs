import '../Css/cases.css';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Cases(){
  const navigate = useNavigate();


      const handleClickRMAkitevo = () => {
        navigate("/blogs/RealMadridkitevolution");
        window.scrollTo(0, 0); // Scroll to the top of the page
      };

      const handleClickSupermarket = () => {
        navigate("/Supermarket");
        window.scrollTo(0, 0); // Scroll to the top of the page
      };

      const handleClickJewelry = () => {
        navigate("/Jewelrystore");
        window.scrollTo(0, 0); // Scroll to the top of the page
      };
    return(
        <div>
        <div className='desktop'>
        <Link to='/blogs/RealMadridkitevolution' target="_blank" style={{textDecoration:'none',color:'inherit'}}>
        <div class="case-study">
  <h2 class="heading">The Evolution of Real Madrid Kits: From the Classic Whites to Modern Marvels</h2>
  <div class="image-container">
  <img src="https://wallpapercave.com/wp/wp1878835.jpg" alt="Case Study Image" class="image"/>
</div> 
 <div class="details">
    <div class="rightside">
      <p class="desc">Real Madrid, one of the most iconic football clubs in the world, has a rich history that spans over a century. Over the years, their jerseys have become synonymous with excellence and a winning tradition. From the classic all-white designs to modern marvels adorned with cutting-edge technology, Real Madrid's jerseys have evolved significantly. In this article, we explore the fascinating journey of Real Madrid's jersey evolution, with a nod to prominent players like Vinicius Jr and Cristiano Ronaldo. Additionally, we touch upon the fierce rivalry with FC Barcelona, making this a must-read for football fans.<span class="purpletext" style={{cursor:'pointer'}}>&nbsp; Read more here!</span></p>
    </div>
  </div>
</div>
          </Link>
        
        </div>
          
        </div>
    )
}