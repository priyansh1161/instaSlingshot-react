import { GALLERY_LOAD_SUCCESS, GALLERY_LOAD_FAILURE, GALLERY_RESET} from '../constants/actionTypes';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import axios from 'axios';
// although it's not good to use Credentials on front end. but foresquare suggested this
// todo move the fetching to back end

const CLIENT_ID = 'QMFFSNQDTUMVWCJLLRLD3KIBYWD44PK50JQ2U0DHBIQJWTYU';
const CLIENT_SECRET = 'Q03BNLIRVSTQI4LL14J1VY1EOI0EKBJQGZKAYHR4SWVSLTJY';
const _AUTH = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20170427`;
// todo implement lazy scrolling
export function getGallery(lat,lng){
  return function (dispatch) {
    dispatch(showLoading());
    axios.get(`https://api.foursquare.com/v2/venues/search?${_AUTH}&ll=${lat},${lng}&limit=5`)
      .then(({data}) => {
        dispatch({
          type : GALLERY_RESET
        });
        for(let i=0;i<data.response.venues.length;i++)
        axios.get(`https://api.foursquare.com/v2/venues/${data.response.venues[i].id}/photos?${_AUTH}`)
          .then((info) => {
            let res = info.data;
            console.log(res);
            dispatch({
              type : GALLERY_LOAD_SUCCESS,
              payload : res.response.photos.items
            });
            dispatch(hideLoading());
          });
      })
      .catch((err) => {
        dispatch(hideLoading());
        dispatch({
            type : GALLERY_LOAD_FAILURE,
            payload :err.message || err || 'Something Went Wrong'
        });
      });
  };
}
