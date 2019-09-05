import * as types from './actionTypes';
const jwt = require('jwt-simple');

export const userPostFetch = user => {
 return dispatch => {
   return fetch("http://localhost:3001/api/users", {
     method: "POST",
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
     },
     body: JSON.stringify({user})
   })
     .then(resp => resp.json())
     .then(data => {
        localStorage.setItem('token',jwt.encode(data, 'secret'))
        dispatch(loginUser(data.user))
     })
 }
}

export const fetchCurrentUser = () => {
 const decodeJwt = jwt.decode(localStorage.token, 'secret');
 const storedUser = (decodeJwt.user);
 return dispatch => {
  return fetch(`/users/${storedUser.id}`)
    .then(response => response.json())
    .then(user => {
     console.log(user)
      dispatch(loginUser(user))
    })
    .catch(error => console.log(error));
 };
}


const loginUser = userObj => ({
   type: types.LOGIN_USER,
   user: userObj
})



