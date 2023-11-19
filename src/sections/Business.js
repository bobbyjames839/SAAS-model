import '../css/Business.css';
import imageTop from '../images/creator.webp'
import imageButtom from '../images/business.webp'

export const Business = () => {
  return (
    <div className='business'>
      <h1 className='section-title'>Designed for Businesses and Creators</h1>
      <div className='business-inner'>
        
        <div className='creator-item-outer'>
          <div className='item'>
            <div className='creator-left'>
            <h2>Creators</h2>
            <h4>Supercharge your social presence with our AI tool, growing your audience and fueling your creative success.</h4>
            <p>Automate content scheduling and posting<i className='fa fa-check'></i></p>
            <p>Engage with followers through personalized responses<i className='fa fa-check'></i></p>
            <p>Analyze data to optimize marketing strategies<i className='fa fa-check'></i></p>
            <p>Target and attract potential customers with precision<i className='fa fa-check'></i></p>
            <p>Manage multiple social media accounts seamlessly<i className='fa fa-check'></i></p>
            <button>Learn More</button>
            </div>

            <img src={imageTop}/>
          </div>
        </div>
        
        <div className='business-item-outer'>
          <div className='item'>
            <img src={imageButtom}/>
            
            <div className='business-right'>
              <h2>Businesses</h2>
              <h4>Unlock the power of social media with our AI-driven tool, elevating your brand and boosting sales effortlessly.</h4>
              <p><i className='fa fa-check'></i>Automate content scheduling and posting</p>
              <p><i className='fa fa-check'></i>Engage with followers through personalized responses</p>
              <p><i className='fa fa-check'></i>Analyze data to optimize marketing strategies</p>
              <p><i className='fa fa-check'></i>Target and attract potential customers with precision</p>
              <p><i className='fa fa-check'></i>Manage multiple social media accounts seamlessly</p>
              <button>Learn More</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}