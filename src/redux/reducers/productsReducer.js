import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};
const intialCount = {
  count: 0,
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
console.log("count type",type);
console.log("count payload",payload);
switch(type){
  case ActionTypes.CART_COUNT:
    return {...state,count:payload+1};
    default:
      return state
}
}