import { ACTION_TYPE } from "../constants";

export const updateLoginState = (state: boolean) => ({
  type: ACTION_TYPE.UPDATE_LOGIN_STATE,
  state
});

export const updateSearchingState = (state: boolean) => ({
  type: ACTION_TYPE.UPDATE_SEARCHING_STATE,
  state
});
