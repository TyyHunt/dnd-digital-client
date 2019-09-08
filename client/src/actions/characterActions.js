import * as types from './actionTypes';

export const characterCreateFetch = character => {
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
         dispatch(createCharacter(data.character))
     })
 }
}


export const createCharacter = charObj => ({
 type: types.CREATE_CHARACTER,
 character: charObj
})
