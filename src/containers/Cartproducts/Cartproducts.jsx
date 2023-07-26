 
import React, { useEffect ,useState} from "react";
import axios from "axios";
 
import { useDispatch, useSelector } from "react-redux";
 
import "./cart.css"
const Cartproducts = () => {
  const dispatch = useDispatch();
  

  let cartitems=useSelector((state)=>state.cartItems.cartvalue)
  

 
 
 
  let cartdetails=cartitems
   
 const carts= cartdetails.map((cart) => {
    const {id,title,category,image,price } =cart;
 console.log(cart.products);
     
  return  (
   
 
  
<div >
<section class="h-100 h-custom" key={id} >
<div class="container py-5 h-100">
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col">
      <div class="card" >
        <div class="card-body p-4">

          <div class="row">

            <div class="col-lg-7">
           
              

              <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <p class="mb-1">Item</p>
                   
                   
                </div><div>
                    <p class="mb-0" style={{marginLeft:"47rem"}}>quantity</p>
                  </div>
                  <div>
                    <p class="mb-0" style={{marginLeft:"28rem"}}>price</p>
                  </div>
            
             
           
              </div>
             
            
              <div class="card mb-3" style={{width:'167%',height:"125px"}}>     
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div>
                        <img
                          src={image}
                          className="img-fluid rounded-3" alt="Shopping item" style={{width:'75px'}}/>
                      </div>
                      <div className="ms-3">
                        <h5>{title}</h5>
                        <p className="small mb-0">{category}</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <div style={{width:'50px'}}/>
                        <h5 className="fw-normal mb-0">2</h5>
                      </div>
                      <div  style={{width:'50px'}}/>
                        <h5 className="mb-0">${price}</h5>
                      </div>
                      <a href="#!" style={{color: "#cecece"}}><i class="fas fa-trash-alt"></i></a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7">
              

             

            
                </div>
              </div>

       

           

               

            </div>
             
          </div>

        </div>
      </div>
    </div>


</section>
</div>
      
 
      )
    }) 
    
    return  (
     <>{carts}</>
 )
 }
 
    
 
export default Cartproducts