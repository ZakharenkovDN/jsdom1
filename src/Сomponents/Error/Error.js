import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import img from './404.png';
import './Error.css'

export default class Error extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <main>
          <div class="error">
            <img width="580" height="372" src={img}/>
            <div class="error-text">
              <h1> Page Not Found </h1>
              <h4> We’re sorry, the page you requested could not be found. Please go back to the homepage. </h4>
            </div>  
            <div class="error-button"> <Link to="/"> Go Home </Link> </div>
          </div>
        </main>
        <Contact/>
      </div>
    )
  }
}
