import React from "react"
import Cart from "../Cart/Cart"
import "./newarrivals.css"

const NewArrivals = () => {
  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left d_flex align-items-center'>
              <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
              <h2>New Arrivals </h2>
            </div>
            {/* <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div> */}
          </div>

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
