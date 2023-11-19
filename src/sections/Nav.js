import '../css/Nav.css'
import {useState} from 'react';

export const Nav = () => {

  const [one, setOne] = useState(true)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)
  const [five, setFive] = useState(false)

  const toggleClass = (num) => {
    
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
 
    switch (num) {
      case 'One':
        setOne(true);
        break;
      case 'Two':
        setTwo(true);
        break;
      case 'Three':
        setThree(true);
        break;
      case 'Four':
        setFour(true);
        break;
      case 'Five':
        setFive(true);
        break;
      default:
        break;
    }
  }
  
  return (
    <div className="nav">
      <div className="nav-section nav-left">
        <span></span>
        <p>kNect</p>
      </div>

      <div className="nav-section nav-right">
        <a id="a-1" onClick={() => {toggleClass('One')}} className={one ? 'focused' : null}>Home</a>
        <a id="a-2" onClick={() => {toggleClass('Two')}} className={two ? 'focused' : null}>Attributes</a>
        <a id="a-3" onClick={() => {toggleClass('Three')}} className={three ? 'focused' : null}>Business</a>
        <a id="a-4" onClick={() => {toggleClass('Four')}} className={four ? 'focused' : null}>Plans</a>
        <a id="a-5" onClick={() => {toggleClass('Five')}} className={five ? 'focused' : null}>Contact</a>
      </div>
    </div>
  )
}