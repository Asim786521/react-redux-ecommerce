import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer,cartCount } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  count:cartCount
});
export default reducers;