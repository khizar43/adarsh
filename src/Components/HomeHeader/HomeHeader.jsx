import React from 'react';
import styles from './homeheader.module.css'
const HomeHeader = () => {
  return (
    <header>
      <div  className={`${styles.section__container} ${styles.header__container}`}>
        <div className={`${styles.header__content}`}>
          <p>EXTRA 55% OFF IN SPRING SALE</p>
          <h1>Discover & Shop<br />The Trend Ss19</h1>
          <button className="btn">SHOP NOW</button>
        </div>
        <div  className={`${styles.header__image}`}>
          <img src="assets/header.png" alt="header" />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
