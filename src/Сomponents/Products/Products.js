import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import Title from '../Title/Title';
import span from './image.png';
import img8 from './All product images/8.png';
import img9 from './All product images/9.png';
import img10 from './All product images/10.png';
import img11 from './All product images/11.png';
import img12 from './All product images/12.png';
import img13 from './All product images/13.png';
import img14 from './All product images/14.png';
import img15 from './All product images/15.png';
import img5 from './All product images/5.png';
import img6 from './All product images/6.png';
import img7 from './All product images/7.png';
import './Products.css'

export default class Products extends Component {
  render() {
    return (
      <div>
          <Navigation/>
          <div class="main-head">
          <Title name = 'All products'></Title>
              </div>
          <div class="main-span">
            <img width="908" height="36" src={span} alt="span"/>
          </div>
          <div class="tools"> 
              <div class="tool-item">
                <div class="procent"> -17% </div>
                <Link to="/Secateurs"><img src={img8} alt="secateurs"/></Link>
                <div class="tool-price">
                <Link to="/Secateurs"><h3> Secateurs </h3></Link>
                  <h4> $199 </h4>
                  <h5> $240 </h5>
                </div>  
              </div>
              <div class="tool-item">
                <div class="procent"> -26% </div>
                <Link to="/Collection"><img src={img9} alt="collection"/></Link>
                <div class="tool-price">
                <Link to="/Collection"><h3> Collection for berries (plastic). </h3></Link>
                  <h4> $100 </h4>
                  <h5> $150</h5>
                </div>
              </div>
              <div class="tool-item">
                <div class="procent"> -36% </div>
                <Link to="/Error"><img src={img10} alt="gloves"/></Link>
                <div class="tool-price">
                <Link to="/Error"><h3> Gloves (black) </h3></Link>
                  <h4> $9 </h4>
                  <h5> $14</h5>
                </div>
              </div>
              <div class="tool-item">
              <Link to="/Error"><img src={img11} alt="handsaw"/></Link>
                <div class="tool-price">
                <Link to="/Error"><h3> Sickle-shaped handsaw </h3></Link>
                  <h4> $155 </h4>
                </div>
              </div>
              <div class="tool-item">
              <Link to="/Error"><img src={img12} alt="shovel"/></Link>
                <div class="tool-price">
                <Link to="/Error"><h3> Bayonet shovel</h3></Link>
                  <h4> $180 </h4>
                </div>
              </div>
              <div class="tool-item">
              <Link to="/Error"><img src={img13} alt="pitchfork"/></Link>
                <div class="tool-price">
                <Link to="/Error"><h3> Garden pitchfork </h3></Link>
                  <h4> $179 </h4>
                </div>
              </div>
              <div class="tool-item">
              <Link to="/Error"><img src={img14} alt="barbell"/></Link>
                <div class="tool-price">
                <Link to="/Error"><h3> Barbell </h3></Link>
                  <h4> $12 </h4>
                </div>
              </div>
              <div class="tool-item">
                <div class="procent"> -18% </div>
                <Link to="/Error"><img src={img15} alt="thermometer"/></Link>
                <div class="tool-price">
                <Link to="/Error"><h3> Souvenir thermometer </h3></Link>
                  <h4> $98 </h4>
                  <h5> $120</h5>
                </div>
              </div>
              <div class="tool-item">
                <div class="procent"> -50% </div>
                <Link to="/Error"><img src={img5} alt="bridge"/></Link>
                <div class="tool-price">
                <Link to="/Error"><h3> Decorative forged bridge </h3></Link>
                  <h4> $500 </h4>
                  <h5> $1000</h5>
                </div>  
              </div>
              <div class="tool-item">
                <div class="procent"> -34% </div>
                <Link to="/Error"><img src={img6} alt="basket"/></Link>
                <div class="tool-price">
                <Link to="/Error"><h3> Flower basket </h3></Link>
                  <h4> $100 </h4>
                  <h5> $150</h5>
                </div>
              </div>
              <div class="tool-item">
                <div class="procent"> -25% </div>
                <Link to="/Error"><img src={img7} alt="aquarium"/></Link>
                <div class="tool-price">
                <Link to="/Error"><h3> Aguarium lock </h3></Link>
                  <h4> $150 </h4>
                  <h5> $200</h5>
                </div>
              </div>
            </div>
          <Contact/>
      </div>
    )
  }
}
