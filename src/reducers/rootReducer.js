import { combineReducers } from 'redux';
import raceReducers from './raceReducers';
import klassReducers from './klassReducers';
import weaponReducers from './weaponReducers';
import userReducers from './userReducers';

const rootReducer = combineReducers({
  races: raceReducers,
  klasses: klassReducers,
  weapons: weaponReducers,
  user: userReducers
});

export default rootReducer;