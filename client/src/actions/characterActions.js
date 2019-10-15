import * as types from './actionTypes';

export const characterCreateFetch = character => {
  console.log('C')
  return dispatch => {
    return fetch("http://localhost:3001/api/characters", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({character})
    })
      .then(resp => resp.json())
      .then(data => {
        console.log('D')
          dispatch(createCharacter(data.character))
      })
  }
}

export const characterUpdateFetch = (id, character) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/characters/" + id, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({character})
    })
      .then(resp => resp.json())
      .then(data => {
          console.log(data)
          dispatch(createCharacter(data.character))
      })
  }
}


export const createCharacter = charObj => ({
  type: types.CREATE_CHARACTER,
  character: charObj
})
