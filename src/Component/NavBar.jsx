import React from 'react'
import "./NavBar.css"
import {FaSearch,FaShoppingCart} from "react-icons/fa"

const Header = () => {
  return (
    <>
    <div className='navbar'>
           <div className="logo">
            Ecommerce
           </div>
      {/* <button className="LBtn">Login</button> */}
      <div className='links'>
        <div className={"SellerInfo"}>Home</div>
        <div className={"SellerInfo"}>About</div>
        <h3 className={"MoreInfo"}>Shop</h3>
        <div className={"SellerInfo"}>Contact</div>
        <div className={"CartInfo"}> <span className="Cart"><FaShoppingCart></FaShoppingCart></span >Cart</div>
      </div>
      <div className="Search_bar">
        <input type="text" placeholder="Search" />
        <FaSearch className={"SearchIcon"} />
      </div>
    </div>
    </>
  )
}

export default Header