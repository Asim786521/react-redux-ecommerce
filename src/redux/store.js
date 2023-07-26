import { configureStore } from "@reduxjs/toolkit";
 
import reducers from './reducers/index'
 import cartSliceReducer from "./reducers/cartSlice";
const store = configureStore(
  
    { reducer:reducers,cartSliceReducer},
 
   
   
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  export default store;