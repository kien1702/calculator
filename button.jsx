import React, { Component } from 'react';
import './button.css';
const operating = funtion(val){
  return !isNaN(val) || val ==="." || val ==="=";
}
const Button = function(props){
<div className={'button' ${operating(props.children)? null : operated}}> {props.children} </div>
}
