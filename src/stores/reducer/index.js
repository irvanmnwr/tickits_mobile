import {combineReducers} from 'redux';

import movie from './movie';
import user from './user';
import schedule from './schedule';
import booking from './booking';

export default combineReducers({
  movie,
  user,
  schedule,
  booking,
});
