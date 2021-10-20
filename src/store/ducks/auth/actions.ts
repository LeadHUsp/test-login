import {
  AuthActionsType,
  SignInActionInterface,
  SetLoginActionInterface,
  SetPasActionInterface,
} from './type';

export const signIn = (): SignInActionInterface => ({
  type: AuthActionsType.SET_AUTH_STATE,
});
export const setLogin = (payload: string): SetLoginActionInterface => ({
  type: AuthActionsType.SET_LOGIN,
  payload,
});
export const setPas = (payload: string): SetPasActionInterface => ({
  type: AuthActionsType.SET_PAS,
  payload,
});
