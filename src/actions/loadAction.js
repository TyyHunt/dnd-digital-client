import { getRaces } from './raceActions';
import { getKlasses } from './klassActions';
import { getWeapons } from './weaponActions';
//import { fetchCurrentUser } from './userActions';

export const loadSeed = () => {
  return dispatch => Promise.all([
    dispatch(getKlasses()),
    dispatch(getRaces()),
    dispatch(getWeapons()),

  ]);
}