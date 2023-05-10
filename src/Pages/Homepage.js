import Lottie from 'react-lottie';
import animationData from '../Assets/126412-fans.json';
import Navbar from './Navbar';
import '../Css/homepage.css';
function Homepage() {

    return (
        <div >
            <Navbar></Navbar>
            <div class="highlights" style={{backgroundColor: 'white', height: '350px', fontSize: '30px'}}>
                Lorem Ipsum
                <div class="productdisplayforhighlights">
                <div class="square">
                    <div class="square-content">Square 1</div>
                </div>
                <div class="square">
                    <div class="square-content">Square 2</div>
                </div>
                <div class="square">
                    <div class="square-content">Square 3</div>
                </div>
                </div>
            </div>
            <div className='shopbyleague' style={{ color: 'white', backgroundColor: 'black', height: '250px' }}>
                Lorem Ipsum dolor
            </div>
            <div className='shopvintagecard' style={{ display: 'flex', alignItems: 'right', color: 'white', backgroundColor: 'black', height: '200px' }}>
                Lorem Ipsum dolor
            </div>
            <div className='shopmoderncard' style={{ color: 'white', backgroundColor: 'black', height: '200px' }}>
                Lorem Ipsum dolor
            </div>
            <div className='shippingmessage' style={{ color: 'black', backgroundColor: 'aliceblue', height: '60px' }}>
                Lorem Ipsum dolor
            </div>
            <div className='footer' style={{ color: 'white', backgroundColor: '#4101ab', height: '200px' }}>
                Lorem Ipsum dolor
            </div>
        </div>
    );
}

export default Homepage;