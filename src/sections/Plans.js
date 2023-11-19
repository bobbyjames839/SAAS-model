import '../css/Plans.css';
import {useState} from 'react';

export const Plans = () => {

  const [left, setLeft] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [right, setRight] = useState(false);

  const toggleColor = (num) => {
    setLeft(false);
    setMiddle(false);
    setRight(false);

    switch (num) {
      case 'left': setLeft(true); break;
      case 'middle': setMiddle(true); break;
      case 'right': setRight(true); break;
    }

  }

  return (
    <div className='plans'>
      <h1 className='section-title'>Pick a plan thats right for you</h1>
      <div className='plans-outer'>

        <div className='plan' onClick={() => {toggleColor('left')}} style={{backgroundColor: left ? 'rgb(100, 175, 255)' : 'rgb(189, 221, 255)'}}>
          <h3>Solo</h3>
          <h2>£20/Month</h2>
          <div className='plan-button'><button>Free trial</button></div>
          <h4>1 User</h4>
          <h4>5 Social Accounts</h4>
          <div className='plan-icons'>
            <i className='fa fa-instagram'></i>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-twitter'></i>
            <i className='fa fa-youtube'></i>
            <i className='fa fa-linkedin'></i>
            <i className='fa fa-pinterest'></i>
          </div>
          <p><i className='fa fa-check'></i>Unlimited posting</p>
          <p><i className='fa fa-check'></i>Post scheduling</p>
          <p><i className='fa fa-check'></i>Access to messages in one inbox</p>
          <p><i className='fa fa-check'></i>Social ads analytics and reporting</p>
          <p><i className='fa fa-check'></i>Employee advocacy</p>
        </div>

        <div className='plan' onClick={() => {toggleColor('middle')}} style={{backgroundColor: middle ? 'rgb(100, 175, 255)' : 'rgb(189, 221, 255)'}}>
          <h3>Team</h3>
          <h2>£50/Month</h2>
          <div className='plan-button'><button>Free trial</button></div>
          <h4>5 Users</h4>
          <h4>20 Social Accounts</h4>
          <div className='plan-icons'>
            <i className='fa fa-instagram'></i>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-twitter'></i>
            <i className='fa fa-youtube'></i>
            <i className='fa fa-linkedin'></i>
            <i className='fa fa-pinterest'></i>
          </div>
          <h5>Everything with solo, plus:</h5>
          <p><i className='fa fa-check'></i>Roles and permissions</p>
          <p><i className='fa fa-check'></i>Assign messages to team members</p>
          <p><i className='fa fa-check'></i>Approval workflows</p>
          <p><i className='fa fa-check'></i>Social ads management</p>
          <p><i className='fa fa-check'></i>kNect customer support</p>
        </div>

        <div className='plan' onClick={() => {toggleColor('right')}} style={{backgroundColor: right ? 'rgb(100, 175, 255)' : 'rgb(189, 221, 255)'}}>
          <h3>Professional</h3>
          <h2>£200/Month</h2>
          <div className='plan-button'><button>Free trial</button></div>
          <h4>20 Users</h4>
          <h4>50 Social Accounts</h4>
          <div className='plan-icons'>
            <i className='fa fa-instagram'></i>
            <i className='fa fa-facebook'></i>
            <i className='fa fa-twitter'></i>
            <i className='fa fa-youtube'></i>
            <i className='fa fa-linkedin'></i>
            <i className='fa fa-pinterest'></i>
          </div>
          <h5>Everything with team, plus:</h5>
          <p><i className='fa fa-check'></i>Inbound/outbound tagging</p>
          <p><i className='fa fa-check'></i>Saved replies and auto-conversation</p>
          <p><i className='fa fa-check'></i>Content and asset library</p>
          <p><i className='fa fa-check'></i>Team productivity reporting</p>
          <p><i className='fa fa-check'></i>Additional automation tools</p>
        </div>
      </div>
    </div>
  )
}