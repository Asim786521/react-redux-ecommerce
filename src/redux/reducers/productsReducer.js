import { ActionTypes } from "../constants/action-types";
 
const intialState = {
  products: [],
  cart:[]

};
const intialCount = {
  count: 0,
};

const initialDisplay={
  cartvalue:[]
};


export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const cartCount=(state=intialCount,{type,payload})=>{
 
switch(type){
  case ActionTypes.CART_COUNT:
    return {...state,count:payload+1};
    default:
      return state
}
};
export const cartProducts=(state=intialState,{type,payload})=>{
  switch(type){

    case ActionTypes.CART_PRODUCTS:
      return {...state,cart:payload}
        default:
          return state
      
  }
}
export const cartDisplay=(state=initialDisplay,{type,payload})=>{
  console.log("payload received",payload)
  console.log(" type recieved",type)
  switch(type){

    case ActionTypes.CART_DISPLAY:
      return {...state,cartvalue:[...state.cartvalue].concat(payload)}
        default:
          return state
      
  }
}

 