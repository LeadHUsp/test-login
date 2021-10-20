import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './ducks/auth/reducer';
import { AuthState } from './ducks/auth/state';
export const rootReducer = combineReducers({
  auth: authReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
export interface RootState {
  auth: AuthState;
}
