import React, { Component } from 'react';
import Button from '../Button';
// import logo from './logo.svg';
// import './App.css';
// import { createStore } from 'redux';
import {
    incrementCount,
    decrementCount,
} from '../../actions/actions.js';

class Counter extends Component {
     increment = ()=> this.props.dispatch(incrementCount());
    decrement = ()=> this.props.dispatch(decrementCount()); 
  render() {
    console.log(this.props);
      // let trackCount = store.getState();
    return (
      <div>
          <div>Counter :{this.props.count}</div>
          <Button name="Add" onClick={this.increment}></Button>
          <Button name="Minus" onClick={this.decrement}></Button>
      </div>
    );
  }
}



export default Counter;

