import React from 'react';
import { Link } from "react-router-dom";
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import Title from '../Title/Title';
import './Cart.css';
import OrderBlock from './OrderBlock';
import img8 from '../Products/All product images/8.png';
import img9 from '../Products/All product images/9.png';

const Cart = () => {
  return (
    <div className="Cart">
      <Navigation />
      <div class="shopping-cart">
        <Title name="Shopping cart" />
        <div class="back">
          <Link to="/"><div className="block">Back to the store</div></Link>
        </div>
        <div class="order">
          <div class="order-tools">
            <OrderBlock name="Secateurs" sale = '199' price = '240' value = '0' img = {img8} />
            <OrderBlock name="Collection" sale = '26' price = '35' value = '0' img = {img9} />
          </div>
          <div class="order-details">
          <h2> Order details </h2>
          <h4> 1 items </h4>
          <div class="total">
            <h4> Total </h4>
            <h1> $000,00 </h1>
          </div>
          <div class="field-name"> Name </div>
          <div class="field-phone"> Phone number </div>
          <div class="field-email"> Email </div>
          <div class="order-button"> Order </div>
          </div>  
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default Cart;
