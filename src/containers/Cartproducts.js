 
import React, { useEffect ,useState} from "react";
import axios from "axios";
 
import { useDispatch, useSelector } from "react-redux";
import { cartProducts } from "../redux/actions/productsActions";
 

const Cartproducts = () => {
  const dispatch = useDispatch();
  

  let cartD=useSelector((state)=>state.cartdata.cartvalue)
  console.log("cartdisplay",cartD)

 
 
useEffect(() => {
  // axios.get('https://fakestoreapi.com/carts?userId=1').then((response)=>{
  //   dispatch(cartProducts(response.data))
  // })
      
},[]);
  let cartdetails=cartD
   
 const carts= cartdetails.map((cart) => {
    const {id,title,category,image,price } =cart;
 console.log(cart.products);
     
  return  (
   
 
  

  //{cartdetails && cartdetails.map}
      <div className="ui link cards" key={id} > 
   
        <div className="card">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="content">
            <div className="header">{title}</div>
      
            <div className="meta price">$ {price}</div>
            <div className="meta">{category}</div>
          </div>
        
        </div>
         
        
      </div>
      
 
      )
    }) 
    
    return <>{carts}</>;
 }

export default Cartproducts