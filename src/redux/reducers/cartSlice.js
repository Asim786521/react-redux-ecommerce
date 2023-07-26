
import { createSlice } from "@reduxjs/toolkit";
// const initialvalue={
//     cartvalue:[]
//   };
  


export const cartSlice=createSlice({
    name:"cartArray",
    initialState:[],
    reducers:{
      addToCart(state,action){
        
        
        // console.log("payload of addtoCart",action);
        state.cartvalue.push(action.payload)
      }
    }
    
})

export const {addToCart}=cartSlice.actions

export default cartSlice.reducer;