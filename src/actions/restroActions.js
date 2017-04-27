import { RESTRO_LOAD_SUCCESS, RESTRO_LOAD_FAILURE } from '../constants/actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import axios from 'axios';

export function getNearbyRestro(lng, lat) {
  return function (dispatch) {
    dispatch(showLoading());
    axios.get(`/restro/?lng=${lng}&lat=${lat}`)
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
