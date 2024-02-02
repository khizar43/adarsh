import React from "react"
import Home from "../../Components/MainPage/Home/Home"
import FlashDeals from "../../Components/FlashDeals/FlashDeals/FlashDeals"
import TopCate from "../../Components/Top/Categories/TopCate"
import NewArrivals from "../../Components/NewArrivals/NewArrivals/NewArrivals"
import Discount from "../../Components/Discount/Discount/Discount"
import Shop from "../../Components/Annocument/Annocument"
import Annocument from "../../Components/Annocument/Annocument"
import Wrapper from "../../Components/Wrapper/Wrapper/Wrapper"
import '../../App.css'

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </>
  )
}

export default Pages
