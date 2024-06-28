import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Sale_List.css';
import img5 from './5.png';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';

export default class Sale_List extends Component {
  render() {
    return (
        <div>
            <div class="sale"> 
              <div class="sale-item">
                <div class="procent"> -50% </div>
                <Link to="/Error"><img width="316" height="350" src={img5} alt="Decorative forged bridge"/> </Link>
                <div class="item-price">
                <Link to="/Error"><h3> Decorative forged bridge </h3></Link>
                  <h4> $500 </h4>
                  <h5> $1000</h5>
                </div>  
              </div>
              <div class="sale-item">
                <div class="procent"> -34% </div>
                <Link to="/Error"><img width="316" height="350" src={img6} alt="Flower basket"/> </Link>
                <div class="item-price">
                  <Link to="/Error"><h3> Flower basket </h3></Link>
                  <h4> $100 </h4>
                  <h5> $150</h5>
                </div>
              </div>
              <div class="sale-item">
                <div class="procent"> -25% </div>
                <Link to="/Error"><img width="316" height="350" src={img7} alt="Aguarium lock"/> </Link>
                <div class="item-price">
                  <Link to="/Error"><h3> Aguarium lock </h3> </Link>
                  <h4> $150 </h4>
                  <h5> $200</h5>
                </div>
              </div>
              <div class="sale-item">
                <div class="procent"> -17% </div>
                <Link to="/Secateurs"><img width="316" height="350" src={img8} alt="Secateurs"/> </Link>
                <div class="item-price">
                  <Link to="/Secateurs"><h3> Secateurs </h3></Link>
                  <h4> $199 </h4>
                  <h5> $240</h5>
                </div>
              </div>
            </div>
        </div>
    );
  }
}