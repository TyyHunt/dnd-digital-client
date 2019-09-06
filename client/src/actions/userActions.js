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

export const userLoginFetch = user => {
 return dispatch => {
   return fetch("http://localhost:3001/api/find", {
     method: "POST",
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
     },
     body: JSON.stringify({user})
   })
     .then(resp => resp.json())
     .then(data => {
        console.log(data)
        localStorage.setItem('token',jwt.encode(data, 'secret'))
        dispatch(loginUser(data.user))
     })
  }
}

export const getProfileFetch = () => {
 return dispatch => {
  const token = localStorage.token;
  const decodeJwt = token ? (jwt.decode(token, 'secret').user.id) : undefined ;
   if (token) {
    console.log(decodeJwt)
     return fetch(`http://localhost:3001/api/users/${decodeJwt}`, {
       method: "GET",
       headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
         'Authorization': `Bearer ${token}`
       }
     })
       .then(resp => resp.json())
       .then(data => {
        console.log(data)
         if (data.message) {
           localStorage.removeItem("token")
         } else {
           dispatch(loginUser(data))
         }
       })
   }
 }
}

export const logoutUser = () => ({
 type: types.LOGOUT_USER
})

export const loginUser = userObj => ({
   type: types.LOGIN_USER,
   user: userObj
})



