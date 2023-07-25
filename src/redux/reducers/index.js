import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer,cartCount ,cartProducts,cartDisplay} from "./productsReducer";
 
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  count:cartCount,
  cart:cartProducts,
 cartdata:cartDisplay
});
export default reducers;