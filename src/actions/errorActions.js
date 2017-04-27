import { RESET_ERRORS } from '../constants/actionTypes';
export function resetError(){
  return {
    type : RESET_ERRORS,
    payload : null
  };
}
export function throwError(msg){
  return {
    type : '_FAILURE',
    payload : msg || 'Something Went Wrong'
  };
}
