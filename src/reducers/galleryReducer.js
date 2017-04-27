import { GALLERY_LOAD_SUCCESS, GALLERY_RESET } from '../constants/actionTypes';
import initialState from './initialState';

export default function restroReducer(state = initialState.gallery, action){

  if(action.type === GALLERY_RESET)
    return initialState.gallery;
  if(action.type === GALLERY_LOAD_SUCCESS){
    return [...state,...action.payload];
  }
  else
    return state;
}
