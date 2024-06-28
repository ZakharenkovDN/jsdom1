import React from 'react';
import './ToolDesc.css'

const ToolDesc = (props) => {
  return (
    <div>
  <main>
    <div class="tool-item-1">
      <img src={props.img}/>
      <div class="tool-price-1">
        <h3> {props.name} </h3>
        <h4> {props.sale} </h4>
        <h5> {props.price} </h5>
        <div class="procent-1"> {props.procent} </div>
        <div class="count"> 
          <div class="plus-minus"> 
            <div class="button" id="minus">-</div>
            <div class="value"> 0 </div>
            <div class="button" id="plus">+</div>
          </div>
          <div class="add-button"> Add to cart </div>
        </div>
        <div class="description"> 
          <h3> Description </h3>
          <h4> {props.description} </h4>
          <h5> Read more </h5>
        </div>
      </div>  
    </div>
  </main>
    </div>
  )

}

export default ToolDesc 