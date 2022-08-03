import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import Menu from "@components/Menu"
import menu from "@icons/icon_menu.svg"
import logo from "@logos/logo_yard_sale.svg"
import shoppinCart from "@icons/icon_shopping_cart.svg"
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";


const Header = () => {

  const {state} = useContext(AppContext)

  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggle, setToggle] = useState(false);


  const handleToggle = () => {
    setToggle(true)
  }

  return (
    <div>
      <nav>
        <img src={menu} alt="menu" className="menu" />
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo" />
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle} >jeyfredc@gmail.com</li>
            <li className="navbar-shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>
              <img src={shoppinCart} alt="shopping-cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div>: null}
            </li>
          </ul>
        </div>
        {toggle && <Menu/>}
        {toggleOrders && <MyOrder/>}
      </nav>
    </div>
  );
};

export default Header;
