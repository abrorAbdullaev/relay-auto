import { ACTION_TYPE } from '../constants';

export const isLoggedInReducer = (state: boolean, action: any) => {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_LOGIN_STATE: {
      return action.state;
    }
    default:
      return false;
  }
};
