import { trucksReducer } from './trucks';
import { loginReducer } from './login';
import { searchingReducer } from './searching';
import { combineReducers } from '../utils/combine-reducers';
import { logsReducer } from './logs';
import { ACTION_TYPE_STORAGE_KEY_MAP } from '../constants/action-types';

export const rootReducer = combineReducers({
  trucks: trucksReducer,
  isLoggedIn: loginReducer,
  isSearching: searchingReducer,
  logs: logsReducer,
});

export const getRootReducer = (storage: any) => (state: any, action: any) => {
  const newState = rootReducer(state, action);
  // @ts-ignore
  const key: string = ACTION_TYPE_STORAGE_KEY_MAP[action.type as string];
  storage.set(key, newState[key]);
  return newState;
};
