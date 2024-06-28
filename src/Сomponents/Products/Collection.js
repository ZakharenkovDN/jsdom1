import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import ToolDesc from './ToolDesc';
import Title from '../Title/Title';
import img9 from './All product images/9.png'

export default class Secateurs extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Title name = 'Collection'></Title>
        <ToolDesc name = 'Collection for berries (plastic)' sale = '$26' price = '$35' procent ='-26%' img = {img9}
        description = 'This berry basket is perfect for collecting and storing fresh berries from the garden or market. Its durable and lightweight design makes it easy to carry and transport your harvest without squishing or damaging the delicate fruits. The open-weave construction allows for proper air circulation to keep your berries fresh longer. With a comfortable handle for easy carrying and a generous capacity, this basket is a must-have for any berry lover. Enjoy your favorite fruits all summer long with this practical and stylish berry basket.'></ToolDesc>
        <Contact/>
      </div>
    )
  }
}

