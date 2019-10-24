import * as types from './actionTypes'

export const getKlasses = () => {
  return dispatch => {
    return fetch('https://dnd-digital-api.herokuapp.com/api/klasses')
      .then(response => response.json())
      .then(data => {
        dispatch(setKlasses(data))
      })
      .catch(error => console.log(error));
  };
}

export const setKlasses = klasses => {
  return {
    type: types.REQUEST_KLASSES,
    klasses: klasses
  }
}