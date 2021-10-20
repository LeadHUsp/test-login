import produce, { Draft } from 'immer';
import { AuthState } from './state';
import { AuthActionsType } from './type';
const initialState: AuthState = {
  login: '',
  pas: '',
  // current: false,
  isAuth: false,
};

export const authReducer = produce((draft: Draft<AuthState>, action) => {
  switch (action.type) {
    case AuthActionsType.SET_AUTH_STATE:
      draft.isAuth = true;
      break;
    case AuthActionsType.SET_LOGIN:
      draft.login = action.payload;
      break;
    case AuthActionsType.SET_PAS:
      draft.pas = action.payload;
      break;
    default:
      break;
  }
}, initialState);
