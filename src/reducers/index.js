import { combineReducers } from 'redux';

import tours from './tourReducer';
import sorts from './sortTourReducer';

export default combineReducers ({
  tours,
  sorts
});
