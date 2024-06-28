import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Category_List.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.jpg';
import img5 from './5.jpg';

export default class Category_List extends Component {
  render() {
    return (
        <div>
          <nav>
            <div className="category-list">
              <div className="category">
                <Link to="/Error"><img width="220" height="370" src={img1} alt="Fertilizer"/>
                <h3> Fertilizer </h3> </Link>
              </div>
              <div className="category">
                <Link to="/Error"><img width="220" height="370" src={img2} alt="Protective products and septic tanks"/>
                <h3> Protective products and septic tanks </h3></Link>
              </div>
              <div className="category">
                <Link to="/Error"><img width="220" height="370" src={img3} alt="Planting material"/>
                <h3> Planting material </h3></Link>
              </div>
              <div className="category">
                <Link to="/Tools"><img width="220" height="370" src={img4} alt="Tools and equipment"/>
                <h3> Tools and equipment </h3></Link>
              </div>
              <div className="category">
                <Link to="/Error"><img width="220" height="370" src={img5} alt="Pots and planters"/>
                <h3> Pots and planters </h3></Link>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}