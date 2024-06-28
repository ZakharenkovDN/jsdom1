import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';
import bag from './bag.png';
import plant from './plant.png';

export default class Navigation extends Component {
  render() {
    return (
        <div>
          <header>
            <div className="header">
              <div className="plant">
                <Link to='/'> <img width="70" height="70" src={plant} alt="Plant-icon" /> </Link>
              </div>
              <div className="header-text">
                <h3> <Link to='/'>Main page</Link> </h3>
                <h3> <Link to='/categories'>Categories</Link> </h3>
                <h3> <Link to='/products'>All products</Link> </h3>
                <h3> <Link to='/sales'>All sales</Link> </h3>
              </div>
              <div className="bag">
                <Link to='/cart'> <img width="48" height="48" src={bag} alt="Bag-icon" /> </Link>
              </div>
            </div>
          </header>
        </div>
    );
  }
}