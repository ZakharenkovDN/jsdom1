import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import Title from '../Title/Title';
import image from './image.png';
import img5 from './Sales images/5.png';
import img6 from './Sales images/6.png';
import img7 from './Sales images/7.png';
import img8 from './Sales images/8.png';
import img9 from './Sales images/9.png';
import img10 from './Sales images/10.png';
import img15 from './Sales images/15.png';
import './Sales.css'

export default class Sales extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Title name = 'Discounted items'></Title>
        <div class="main-span">
          <img width="908" height="36" src={image} alt="span"/>
        </div> 
        <div class="tools"> 
      <div class="tool-item">
        <div class="procent"> -17% </div>
        <Link to='/Secateurs'><img src={img8} alt="secateurs"/></Link>
        <div class="tool-price">
        <Link to='/Secateurs'><h3> Secateurs </h3></Link>
          <h4> $199 </h4>
          <h5> $240 </h5>
        </div>  
      </div>
      <div class="tool-item">
        <div class="procent"> -26% </div>
        <Link to='/Collection'><img src={img9} alt="collection"/></Link>
        <div class="tool-price">
        <Link to='/Collection'><h3> Collection for berries (plastic). </h3></Link>
          <h4> $100 </h4>
          <h5> $150</h5>
        </div>
      </div>
      <div class="tool-item">
        <div class="procent"> -36% </div>
        <Link to='/Error'><img src={img10} alt="gloves"/></Link>
        <div class="tool-price">
        <Link to='/Error'><h3> Gloves (black) </h3></Link>
          <h4> $9 </h4>
          <h5> $14</h5>
        </div>
      </div>
      <div class="tool-item">
        <div class="procent"> -18% </div>
        <Link to='/Error'><img  src={img15} alt="thermometer"/></Link>
        <div class="tool-price">
        <Link to='/Error'><h3> Souvenir thermometer </h3></Link>
          <h4> $98 </h4>
          <h5> $120</h5>
        </div>
      </div>
      <div class="tool-item">
        <div class="procent"> -50% </div>
        <Link to='/Error'><img width="316" height="350" src={img5} alt="bridge"/></Link>
        <div class="tool-price">
        <Link to='/Error'><h3> Decorative forged bridge </h3></Link>
          <h4> $500 </h4>
          <h5> $1000</h5>
        </div>  
      </div>
      <div class="tool-item">
        <div class="procent"> -34% </div>
        <Link to='/Error'><img width="316" height="350" src={img6} alt="basket"/></Link>
        <div class="tool-price">
        <Link to='/Error'><h3> Flower basket </h3></Link>
          <h4> $100 </h4>
          <h5> $150</h5>
        </div>
      </div>
      <div class="tool-item">
        <div class="procent"> -25% </div>
        <Link to='/Error'><img width="316" height="350" src={img7} alt="aquarium"/></Link>
        <div class="tool-price">
        <Link to='/Error'><h3> Aguarium lock </h3></Link>
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
