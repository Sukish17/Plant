import { useState } from 'react'
import './index.css'
import { CiHeart } from "react-icons/ci"
const ProductCard2 = props => {
    const [quantity,setQuanity] = useState()
  const {productData} = props
  const { allUrl} = productData

  const addCart = () => {
    
  }

  return (
      <li className="product-item">
        <div className='ps1'>
        <CiHeart/>
        <img src={allUrl} alt="product" className="thumbnail5" /></div>
        <p className='psp1'>View Product</p>
       <div className='psd3'> <p className='psp2'>Monsterra</p>
        <p className='psp3'>Indoor Plant, Low maintenance</p></div>
        <div className='psd2'>
            <img src='https://s3-alpha-sig.figma.com/img/b5dd/460d/2d5f9291095d1210262f4a0d5f4c77e7?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXwQLEXNfDSjqcx1sAIjJy0nBcqt4jOLjrjcRXiPFnBa4FatldhB0kTvQV2Q1OlggAwTbhRF1931F4ElHkOqZRWsm9IrbNTWgawV13MYHxNQHvMHr48P22vWY7hZUsTK8pCrdOLl3vwZjza65JXVxWSuagE4-ZChO4xeA75pIrcxieQ9R-CVGapfws2S-LChEedvnccpPhdLZe4VSpAINlx5RmaUM40gih35kSeKagCkQjl3FoWtX4i7zFhc0g~tCTEIaYx21QWd5OFyA6bqIFMk4~yMkNFRwVprFSjXEDNQk~T~6EtNv9yBoEOnpFFhO7qQF~gEx5mu-4Gh4Jk4wg__'
            className='star'/>
            <p className='psp4'>4.9</p>
        </div>
        <div className='psd4'>
        <p className='psp5'>₹ 359</p>
        <p className='psp6'>₹ 299</p>
        </div>
        <div className='psd6'><p className='quna'>{quantity}</p>
            <button className='plus' onClick={(e)=>setQuanity((e.target.value)++)}>+</button>
            
            
        <button className='psb1' onClick={addCart}>Add to Cart</button>
        <button className='psb2'>Buy on Rent</button></div>

       </li>
  )
}
export default ProductCard2

