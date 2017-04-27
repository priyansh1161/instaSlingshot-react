import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import error from './errorHandler';
import search from './searchReducer';
import restro from './restroReducer';
import cabs from './cabsReducer';
import gallery from './galleryReducer';
const rootReducer = combineReducers({
  search,
  restro,
  cabs,
  gallery,
  error,
  routing: routerReducer,
  loadingBar : loadingBarReducer
});

export default rootReducer;
