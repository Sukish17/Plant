import {BsFilterRight} from 'react-icons/bs'

import './index.css'

const ProductsHeader = () => {

  // const onChangeSortby = event => {
  //   const {changeSortby} = props
  //   changeSortby(event.target.value)
  // }

  return (
    <div className="products-header">
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <select
          className="sort-by-select"
          
        >
            <option
              
              className="select-option"
            >
              SortBy
            </option>
         
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
