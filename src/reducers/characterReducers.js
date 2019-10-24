import * as types from '../actions/actionTypes';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case types.CREATE_CHARACTER:
      return  action.character
      case types.Delete_USER:
      return {}
    default:
      return state;
  }
}