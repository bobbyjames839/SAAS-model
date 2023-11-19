import '../css/Cover.css';
import {useState} from 'react';

export const Cover = () => {

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  return (
    <div className='cover'>
      <div onMouseEnter={() => setLeft(true)} onMouseLeave={() => setLeft(false)} className='cover-inner cover-left'>
      <div className='cover-inner-text' style={{backgroundColor: left ? 'rgba(0,0,0,.7' : 'rgba(0,0,0,.4',      maxHeight: left ? '200px' : '50px',
          transition: 'max-height .8s'}}>
          <h2>Grow An Audiance</h2>
          <p style={{display: left ? 'flex' : 'none'}}>To grow an audience, the AI will leverage advanced targeting algorithms to identify and engage with potential followers based on their interests, location, and behavior. It will auto-like, comment, and follow relevant users, sparking curiosity and driving them to visit the account. By analyzing data and optimizing strategies, the AI ensures content resonates with the audience, leading to increased organic reach and higher follower conversion.</p>
        </div>
      </div>
      <div onMouseEnter={() => setRight(true)} onMouseLeave={() => setRight(false)} className='cover-inner cover-right'>
        <div className='cover-inner-text' style={{backgroundColor: right ? 'rgba(0,0,0,.7' : 'rgba(0,0,0,.4',  maxHeight: right ? '200px' : '50px',
          transition: 'max-height .8s'}}>
          <h2>Generate Sales</h2>
          <p style={{display: right ? 'flex' : 'none'}}>To generate more sales, the AI will employ personalized marketing techniques, tailoring content to match user preferences. It will track user interactions and purchase behaviors, allowing it to suggest relevant products or services through targeted ads and promotional campaigns. Additionally, the AI will utilize chatbots to provide instant customer support, addressing queries promptly, and nurturing potential buyers through the sales funnel, ultimately leading to higher conversion rates and increased revenue.</p>
        </div>
      </div>
    </div>
  )
}