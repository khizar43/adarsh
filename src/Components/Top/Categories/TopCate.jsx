import React from "react"
import "./topcate.css"
import TopCart from "../Cart/TopCart"

const TopCate = () => {
  return (
    <>
      <section className='TopCate background'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left d_flex align-items-center'>
              <i className='fa-solid fa-border-all'></i>
              <h2>Top Categories</h2>
            </div>
            {/* <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div> */}
          </div>
          <TopCart />
        </div>
      </section>
    </>
  )
}

export default TopCate
