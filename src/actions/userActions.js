import * as types from './actionTypes';
const jwt = require('jwt-simple');

export const userPostFetch = user => {
  return dispatch => {
    return fetch("https://dnd-digital-api.herokuapp.com/api/weapons", {
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
    return fetch("https://dnd-digital-api.herokuapp.com/api/find", {
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
        dispatch(loginUser(data))
    })
  }
}

export const getProfileFetch = () => {
  return dispatch => {
  const token = localStorage.token;
  console.log(localStorage.token)
  const decodeJwt = function() {
    let decoded = jwt.decode(token, 'secret')
    if (decoded.user !== undefined) {
      return decoded.user.id}
    else {
      return null
    }
  }
  //const decodeJwt = token ? (jwt.decode(token, 'secret')) : null ;  
    if (token && decodeJwt) {
    return fetch(`https://dnd-digital-api.herokuapp.com/api/users/${decodeJwt()}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data.characters)
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



