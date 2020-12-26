import { ACTION_TYPE } from '../constants';
import { Logs } from '../models/log';

export const logsReducer = (state: Logs = [], action: any) => {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_LOGIN_STATE: {
      return action.state
    }
    default:
      return state;
  }
};
