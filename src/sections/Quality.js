import '../css/Quality.css';
import image from '../images/attributes.svg'
import {useState} from 'react'

export const Quality = () => {

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  const toggleHeight = (num) => {

    switch (num) {
      case 'one':
        setOne(prevState => !prevState);
        break;
      case 'two':
        setTwo(prevState => !prevState);
        break;
      case 'three':
        setThree(prevState => !prevState);
        break;
      case 'four':
        setFour(prevState => !prevState);
        break;
      case 'five':
        setFive(prevState => !prevState);
        break;
      default:
        break;
    }
    
  }

  return (
    <div className='quality'>
      <div className='qualities'>

        <div className={one ? 'expanded' :'inner-quality'}>
          <div className='quality-inner-inner'>
            <h2>Automated content scheduling</h2>
            <i className={one ? 'fa fa-minus' : 'fa fa-plus'} onClick={() => {toggleHeight('one')}}></i>
          </div>
          <p>kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq</p>
        </div>

        <div className={two ? 'expanded' :'inner-quality'}>
          <div className='quality-inner-inner'>
            <h2>Real time sentiment analysis</h2>
            <i className={two ? 'fa fa-minus' : 'fa fa-plus'} onClick={() => {toggleHeight('two')}}></i>
          </div>
          <p>kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq</p>
        </div>

        <div className={three ? 'expanded' :'inner-quality'}>
          <div className='quality-inner-inner'>
            <h2>Personalized audiance targeting</h2>
            <i className={one ? 'fa fa-minus' : 'fa fa-plus'} onClick={() => {toggleHeight('three')}}></i>
          </div>
          <p>kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq</p>
        </div>

        <div className={four ? 'expanded' :'inner-quality'}>
          <div className='quality-inner-inner'>
            <h2>Social media post creation</h2>
            <i className={one ? 'fa fa-minus' : 'fa fa-plus'} onClick={() => {toggleHeight('four')}}></i>
          </div>
          <p>kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq</p>
        </div>

        <div className={five ? 'expanded' :'inner-quality'}>
          <div className='quality-inner-inner'>
            <h2>Performance analytics and reporting</h2>
            <i className={one ? 'fa fa-minus' : 'fa fa-plus'} onClick={() => {toggleHeight('five')}}></i>
          </div>
          <p>kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq oanweo aodwn aewudnq aond adn kajdnc akjbw auwbdq</p>
        </div>

      </div>

      <img src={image}/>

    </div>
  )
}