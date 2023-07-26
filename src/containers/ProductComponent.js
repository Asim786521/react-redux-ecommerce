import React from 'react'

import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);
    // const { id, title, image, price, category } = product;
  return (  
    
    products.map((obj) => (
     
      <div className="four wide column" key={obj.id}>
  <Link to={`/product/${obj.id}`}>



    <div className="ui link cards"  > 
 
      <div className="card">
        <div className="image">
          <img src={obj.image} alt={obj.title} />
        </div>
        <div className="content">
          <div className="header">{obj.title}</div>
          <div className="meta price">$ {obj.price}</div>
          <div className="meta">{obj.category}</div>
        </div>
      
      </div>
       
      
    </div>
    <br></br>
  </Link>
</div>
       
   
  )) 
  )
     
}

export default ProductComponent