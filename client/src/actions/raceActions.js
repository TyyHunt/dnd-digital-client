import * as types from './actionTypes'

export const getRaces = () => {
  return dispatch => {
    return fetch('/races')
      .then(response => response.json())
      .then(races => {
        dispatch(setRaces(races))
      })
      .catch(error => console.log(error));
  };
}

export const setRaces = races => {
  return {
    type: types.REQUEST_RACES,
    races: races
  }
}