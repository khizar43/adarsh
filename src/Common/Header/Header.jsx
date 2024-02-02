import React from "react"
import "./header.css"
import Search from "../Header/Search"
import Navbar from "./Navbar"
import { useLocation } from 'react-router-dom';

const Header = ({ CartItem }) => {

  const location = useLocation();

  // Check if the current route is not the login page
  const hideHeaderRoutes  =  ['/login', '/signup' , '/home' , '/products', '/products/:id' , '/carthome'  ]
  const showHeader = !hideHeaderRoutes.includes(location.pathname);
  return (
    <>
     {showHeader && (
      <div>

      
      <Search CartItem={CartItem} />
      <Navbar />

      </div>
     )}
    </>
  )
}

export default Header
