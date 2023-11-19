import '../css/Home.css';
import opentopImage from '../images/opentop.gif';

export const Home = () => {
  return (
    <>
    <div className='home'>

      <div className='home-inner'>
        <h2>kNect</h2>
        <p>An AI powered social-media manager <span>designed for you</span></p>
        <button>Explore</button>
      </div>

      <img src={opentopImage}/>

    </div>

    <div className='icons'>
        <i class="fa fa-google"></i>
        <i class="fa fa-windows"></i>
        <i class="fa fa-instagram"></i>
        <i class="fa fa-etsy"></i>
        <i class="fa fa-quora"></i>
        <i class="fa fa-telegram"></i>
    </div>
    </>
  )
}