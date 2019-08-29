import * as types from './actionTypes'

export const getKlasses = () => {
  return dispatch => {
    return fetch('/klasses')
      .then(response => response.json())
      .then(klasses => {
        dispatch(setKlasses(klasses))
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