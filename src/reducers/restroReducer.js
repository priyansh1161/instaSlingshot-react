import { RESTRO_LOAD_SUCCESS } from '../constants/actionTypes';
import initialState from './initialState';

export default function restroReducer(state = initialState.restro, action){
  console.log(action);
  if(action.type === RESTRO_LOAD_SUCCESS){
    return action.payload;
  }
  else
    return state;
}
