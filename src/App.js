import React from "react";
 
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router,  Route,Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import Cartproducts from "./containers/Cartproducts";
//importing components

 

//redux
 
function App() {
  return (

    <div className="App">
<Router>
  <Header />
 
  <Routes>
    <Route path="/" exact element={<ProductListing/>} />
    <Route path="/product/:productId" element={<ProductDetails/>} />
    <Route path="/carts" element={<Cartproducts/>} />
    <Route>404 Not Found!</Route>
  </Routes>
</Router>
</div>
  )
}   

export default App;
