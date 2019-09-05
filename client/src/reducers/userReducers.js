import * as types from '../actions/actionTypes';

export default function reducer(state = {}, action) {
   switch (action.type) {
     case types.LOGIN_USER:
       return  action.user
     default:
       return state;
   }
 }