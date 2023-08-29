import React from "react";
import "./index.css"
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Cart from "./pages/Cart";

function App() {
  return (
   <>

   <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/log-in" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
      <Footer/>
   </Router>

   </>
  );
}

export default App;
