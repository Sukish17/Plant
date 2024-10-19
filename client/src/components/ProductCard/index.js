//import {Link} from 'react-router-dom'

import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {  imgUrl} = productData

  return (
      <li className="product-item">
        <img src={imgUrl} alt="product" className="thumbnail" />
        <p className="brand">Lorem ipsum dolor<br/> sit amet Aut ipsam <br/>illum et nostrum</p>
       </li>
  )
}
export default ProductCard
