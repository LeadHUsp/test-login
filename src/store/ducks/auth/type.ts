import { Action } from 'redux';

export enum AuthActionsType {
  SET_AUTH_STATE = 'auth/SET_AUTH_STATE',
  SET_LOGIN = 'auth/SIGN_OUT',
  SET_PAS = 'auth/SET_PAS',
}
export interface SignInActionInterface extends Action<AuthActionsType> {
  type: AuthActionsType.SET_AUTH_STATE;
}
export interface SetLoginActionInterface extends Action<AuthActionsType> {
  type: AuthActionsType.SET_LOGIN;
  payload: string;
}
export interface SetPasActionInterface extends Action<AuthActionsType> {
  type: AuthActionsType.SET_PAS;
  payload: string;
}
