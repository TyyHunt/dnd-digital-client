import { combineReducers } from 'redux';
import raceReducers from './raceReducers';

const rootReducer = combineReducers({
  races: raceReducers,
  klasses: klassReducers,
  weapons: weaponReducers,
});

export default rootReducer;