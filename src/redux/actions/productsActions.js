import { ActionTypes } from "../constants/action-types";


export const setProducts = (products) => {
    return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products,
    };
  };
  
  export const selectedProduct = (product) => {
    return {
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product,
    };
  };
  export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };

  export const cartCount=(count)=>{

    return{
      type:ActionTypes.CART_COUNT,
      payload:count
    }
  };

  export const cartProducts=(cartData)=>{
    return{
      type:ActionTypes.CART_PRODUCTS,
      payload:cartData
    }
  }
  export const cartDisplay=(displaycart)=>{
    return{
      type:ActionTypes.CART_DISPLAY,
      payload:displaycart
    }
  }