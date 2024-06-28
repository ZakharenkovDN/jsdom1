import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import Title from '../Title/Title';

export default class Tools extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Title name = 'Tools and equipment'></Title>
        <div class="main-span">
          <img width="908" height="36" src="https://i.postimg.cc/V6WzsXGj/image.png"/>
        </div>
        <div class="tools"> 
        <div class="tool-item">
        <div class="procent"> -17% </div>
        <Link to="/Secateurs"><img width="316" height="350" src="https://i.postimg.cc/NfbJj1KB/8.png"/></Link>
        <div class="tool-price">
        <Link to="/Secateurs"><h3> Secateurs </h3></Link>
          <h4> $199 </h4>
          <h5> $240 </h5>
        </div>  
        </div>
        <div class="tool-item">
        <div class="procent"> -26% </div>
        <Link to="/Collection"><img width="316" height="350" src="https://i.postimg.cc/vBmGZD6c/9.png"/></Link>
        <div class="tool-price">
        <Link to="/Collection"><h3> Collection for berries (plastic).</h3></Link>
          <h4> $100 </h4>
          <h5> $150</h5>
        </div>
        </div>
        <div class="tool-item">
        <div class="procent"> -36% </div>
        <Link to="/Error"><img width="316" height="350" src="https://i.postimg.cc/FRtjtfCX/10.png"/></Link>
        <div class="tool-price">
        <Link to="/Error"><h3> Gloves (black) </h3></Link>
          <h4> $9 </h4>
          <h5> $14</h5>
        </div>
        </div>
        <div class="tool-item">
        <Link to="/Error"><img width="316" height="350" src="https://i.postimg.cc/d0SJDrPg/11.png"/></Link>
        <div class="tool-price">
        <Link to="/Error"><h3> Sickle-shaped handsaw </h3></Link>
          <h4> $155 </h4>
        </div>
        </div>
        <div class="tool-item">
        <Link to="/Error"><img width="316" height="350" src="https://i.postimg.cc/YqfkYJB6/12.png"/></Link>
        <div class="tool-price">
        <Link to="/Error"><h3> Bayonet shovel</h3></Link>
          <h4> $180 </h4>
        </div>
        </div>
        <div class="tool-item">
        <Link to="/Error"><img width="316" height="350" src="https://i.postimg.cc/XJw1t68x/13.png"/></Link>
        <div class="tool-price">
        <Link to="/Error"><h3> Garden pitchfork </h3></Link>
          <h4> $179 </h4>
        </div>
        </div>
        <div class="tool-item">
        <Link to="/Error"><img width="316" height="350" src="https://i.postimg.cc/KvYQDMd0/14.png"/></Link>
        <div class="tool-price">
        <Link to="/Error"><h3> Barbell </h3></Link>
          <h4> $12 </h4>
        </div>
        </div>
        <div class="tool-item">
        <Link to="/Error"><img width="316" height="350" src="https://i.postimg.cc/jddK6MxB/15.png"/></Link>
        <div class="tool-price">
        <Link to="/Error"><h3> Souvenir thermometer </h3></Link>
          <h4> $98 </h4>
          <h5> $120</h5>
        </div>
        </div>
        </div>
        <Contact/>
      </div>
    )
  }
}
