import { SEARCH_TERM_STORE, RESTRO_LOAD_SUCCESS, RESTRO_LOAD_FAILURE  } from '../constants/actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import axios from 'axios';

function saveLatLong(payload) {
  return {
    type : SEARCH_TERM_STORE,
    payload
  };
}

export function initSearch(latLong){
  return function (dispatch) {
    dispatch(saveLatLong(latLong));
    dispatch(showLoading());
    axios.get(`/restro/?lng=${latLong.lng}&lat=${latLong.lat}`)
      .then(({data}) => {
        dispatch(hideLoading());
        dispatch({
          type: RESTRO_LOAD_SUCCESS,
          payload: data
        });
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch({
          type: RESTRO_LOAD_FAILURE,
          payload: err.message || 'Something Went Wrong'
        });
      });
  };
}
