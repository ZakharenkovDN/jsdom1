import React, { Component } from 'react';
import Category_list from './Category_list/Category_List';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';

export default class Categories extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div class="category-head"> 
          <h1> Categories </h1>
        </div>
        <Category_list/>
        <Contact/>
      </div>
    )
  }
}
