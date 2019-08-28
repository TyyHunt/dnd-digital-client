import { combineReducers } from 'redux';
import raceReducers from './raceReducers';

const rootReducer = combineReducers({
  race: raceReducers,
});

export default rootReducer;