import initialState from './initialState';
import { RESET_ERRORS } from '../constants/actionTypes';
export default function staysReducer(state = initialState.error, action) {
  if(action.type === RESET_ERRORS)
    return null;
  else if(/_FAILURE$/.test(action.type)){
    if(action.suppressGlobalErrorNotification)
      return state;
    else
      return action.payload;
}
  else
    return state;
}
