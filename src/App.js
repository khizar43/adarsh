import React, { useState } from "react"
import "./App.css"
 import logo from './logo.svg';
 import { UserAuthContextProvider } from "../src/Context/UserAuthContext.jsx";
 import ProtectedRoute from "../src/Route/ProtectedRoute.jsx";
 import HomePage from './Components/Home/HomePage';
 import SiginUpPage from './Components/SiginUp/SiginUpPage';
 import LoginPage from './Components/Login/LoginPage';
 import Products from './Components/Product/Products';
 import Product from './Components/Product/Product';
 import Cart from './Components/Cart/Cart';

import Header from "../src/Common/Header/Header"
import Pages from "../src/Pages/Page/Pages"
import Data from "../src/Components/Data"
import CartMain from "../src/Common/Cart/Cart"
import Footer from "../src/Common/Footer/Footer"
import Sdata from "../src/Components/Shops/Data/Sdata"
import{ Route , Routes } from 'react-router'
import { BrowserRouter ,useLocation } from 'react-router-dom'
import HomeHeader from "./Components/HomeHeader/HomeHeader";
function App() {
  const location = useLocation();

  // Define an array of routes where you want to show the header and footer
  const showHeaderFooterRoutes = ['/', '/cart'];

  // Determine whether to show the header and footer based on the route
  const showHeaderFooter = showHeaderFooterRoutes.includes(location.pathname);
    /*
  step1 :  const { productItems } = Data 
  lai pass garne using props
  
  Step 2 : item lai cart ma halne using useState
  ==> CartItem lai pass garre using props from  <Cart CartItem={CartItem} /> ani import garrxa in cartItem ma
 
  Step 3 :  chai flashCard ma xa button ma

  Step 4 :  addToCart lai chai pass garne using props in pages and cart components
  */

  //Step 1 :
  const { productItems } = Data
  const { shopItems } = Sdata

  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (

<div>
      {showHeaderFooter && <Header CartItem={CartItem} />}
      <Routes>
        <Route path='/' exact element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />
        <Route path='/cart' exact element={<CartMain CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
       
      </Routes>
      {showHeaderFooter && <Footer />}
      <UserAuthContextProvider>
        <Routes>
          <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SiginUpPage />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/carthome" element={<Cart />} />
        </Routes>
      </UserAuthContextProvider>

      
    </div>
  
  );
}
function MyApplication() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
export default MyApplication;
