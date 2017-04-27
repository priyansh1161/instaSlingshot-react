import { CABS_LOAD_SUCCESS } from '../constants/actionTypes';
import initialState from './initialState';

export default function cabsReducer(state = initialState.cabs, action){
  if(action.type === CABS_LOAD_SUCCESS){
    return action.payload;
  }
  else
    return state;
}
