import React, { useEffect  } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
 
 
import {
  selectedProduct,
  removeSelectedProduct,
  cartCount,
  cartDisplay
 
 
} from "../redux/actions/productsActions";

import { addToCart } from "../redux/reducers/cartSlice";
 
const ProductDetails = () => {
 
  
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
   
let count=useSelector((state)=>state)
console.log("count state initial",count);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);


 const buttonCount=( data)=>{
 
   console.log("product data is",data);
   
  dispatch(cartCount(count.count.count))
 
dispatch(cartDisplay(data))
 

}
  
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (

        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" alt=""src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label" href="/">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
             
                  </div>
                   
      
                  <div >      <button   className="ui primary button"   onClick={()=>buttonCount(product) }>Add to Cart  </button></div>
                </div>  
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

 

  
export default ProductDetails;