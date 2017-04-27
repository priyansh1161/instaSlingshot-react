import { CABS_LOAD_FAILURE, CABS_LOAD_SUCCESS } from '../constants/actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import axios from 'axios';

export function getCabs(lat, lng) {
  return function (dispatch) {
    dispatch(showLoading());
    axios.get(`/cabs/?lat=${lat}&lng=${lng}`)
      .then(({data}) => {
        dispatch(hideLoading());
        dispatch({
          type : CABS_LOAD_SUCCESS,
          payload : data.products
        });
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch({
          type : CABS_LOAD_FAILURE,
          payload : err.message || err || 'Unable to fetch Cabs'
        });
      });
  };
}
