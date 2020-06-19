import { trucksReducer } from "./trucks";
import { combineReducers } from "../utils/combine-reducers";
import { ACTION_TYPE_STORAGE_KEY_MAP } from "../constants/action-types";

export const rootReducer = combineReducers({
  trucks: trucksReducer,
});

export const getRootReducer = (storage: any) => {
  return (state: any, action: any) => {
    const newState = rootReducer(state, action);
    // @ts-ignore
    const key: string = ACTION_TYPE_STORAGE_KEY_MAP[action.type as string];
    storage.saveData(key, newState[key]);
    return newState;
  }
}
