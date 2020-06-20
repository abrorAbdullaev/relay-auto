import { ACTION_TYPE } from "../constants";

export const updateLoginState = (state: boolean) => ({
  type: ACTION_TYPE.UPDATE_LOGIN_STATE,
  state
});
