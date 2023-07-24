 
import React, { useEffect ,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Cartproducts = () => {
  useEffect(() => {
     axios.get('https://fakestoreapi.com/carts?userId=1').then((response)=>{
      console.log("cart products",response.data);
    return response
     })
  }, []);
  return  (
   
 
    <div className="card">
      <div className="image">
        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
      </div>
      <div className="content">
        <div className="header">{Date.now}</div>
         
      </div>
    
    </div>
  )
}

export default Cartproducts