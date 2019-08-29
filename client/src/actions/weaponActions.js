import * as types from './actionTypes'

export const getWeapons = () => {
  return dispatch => {
    return fetch('/weapons')
      .then(response => response.json())
      .then(weapons => {
        dispatch(setWeapons(weapons))
      })
      .catch(error => console.log(error));
  };
}

export const setWeapons = weapons => {
  return {
    type: types.REQUEST_WEAPONS,
    weapons: weapons
  }
}