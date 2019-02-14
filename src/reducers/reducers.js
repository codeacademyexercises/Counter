// import { combineReducers } from 'redux';
import {
    INCREMENT_COUNT,
    DECREMENT_COUNT
    } from '../actions/actions.js';

const incrementCount = (state = {count: 0}, action )=>{
    switch(action.type){
        case INCREMENT_COUNT:
            return {count: state.count+1 }
        case DECREMENT_COUNT:
            return {count: state.count-1 }
        default: 
            return state
    }
}

export const trackCounter = incrementCount;