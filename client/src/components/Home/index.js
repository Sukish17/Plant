import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Nurturing nature's gifts</h1>
        
        <p className="home-description">
        Bringing Life Into Your Home. Nature's Best at Your Doorstep. Plant Happiness, Buy Green. Blooming Beauty for Every Home.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      
    </div>
  </>
)

export default Home
