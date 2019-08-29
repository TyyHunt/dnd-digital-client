import { combineReducers } from 'redux';
import raceReducers from './raceReducers';
import klassReducers from './klassReducers';
import weaponReducers from './weaponReducers';

const rootReducer = combineReducers({
  races: raceReducers,
  klasses: klassReducers,
  weapons: weaponReducers,
});

export default rootReducer;