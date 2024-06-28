import React from 'react';
import './OrderBlock.css'

const OrderBlock = (props) => {
  return (
    <div>
        <div class="tool-block">
              <img src={props.img}/>
              <div class="tool-description">  
                <div class="tool-name-1"> {props.name} </div>
                <div class="close"></div>
                <div class="plus-minus"> 
                <div class="button" id="minus">-</div>
                <div class="value">{props.value}</div>
                <div class="button" id="plus">+</div>
              </div>
              <div class="price" id="dollar">$</div>
              <div class="price" id="ammount">{props.price}</div>
              <div class="sale-price" id="dollar">$</div>
              <div class="sale-price" id="ammount">{props.sale}</div>
              </div>
        </div>
      </div>
      )
   }
        
        export default OrderBlock