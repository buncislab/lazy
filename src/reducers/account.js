import { ADD_ACCOUNT } from '../actions';

export default function account(state=[], action = {}) {
  switch(action.type){
    case ADD_ACCOUNT:
      return {
        isLoading: false,
        isAuthenticated: true,
        account: action.account
      }
    default: return state;
  }
}