import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import ToolDesc from './ToolDesc';
import Title from '../Title/Title';
import img8 from './All product images/8.png'

export default class Secateurs extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Title name = 'Secateurs'></Title>
        <ToolDesc name = 'Secateurs' sale = '$199' price = '$240' procent ='-17%' img = {img8}
        description = 'This high quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user. This secateur cuts up to 2.5 cm diameter. Carrying RHS endorsement, possibly the highest accolade in gardening, for peace of mind this pruner comes with a ten-year guarantee against manufacturing defects. Supplied with replacement blade and spare spring. You may also be interested in our pack of two replacement springs.'></ToolDesc>
        <Contact/>
      </div>
    )
  }
}
