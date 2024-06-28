import './Contact.css';
import React, { Component } from 'react';
import map from './Map.png'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <footer>
            <h1> Contact </h1>  
            <img width="1300" height="800" src={map} alt="Map-adress"/> 
        </footer>
      </div>
    )
  }
}
