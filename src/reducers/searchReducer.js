import { SEARCH_TERM_STORE } from '../constants/actionTypes';
import initialState from './initialState';

export default function searchReducer(state = initialState.search, action){
  if(action.type === SEARCH_TERM_STORE){
    return {
      lat : action.payload.lat,
      lng : action.payload.lng
    };
  }
  else
    return state;
}
