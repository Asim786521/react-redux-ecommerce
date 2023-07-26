import React from "react";
 
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = ( ) => {
  let count=useSelector((state)=>state.count.count)
  console.log("count state in header",count);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2 style={{color:'red'}}>€asy Shopp</h2>
   
      </div>
      <Link style={{fontWeight:'bold' ,fontSize:'2rem',marginRight:'5rem',color:'red',textDecoration:'none'}}to="/carts">saved<sup style={count >0?{color:'green'}:{display:'none'}}>{count}</sup></Link>
    </div>
  );
};

export default Header;