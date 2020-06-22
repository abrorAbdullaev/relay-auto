import { ACTION_TYPE } from '../constants';

export const searchingReducer = (state: boolean, action: any) => {
  switch (action.type) {
    case ACTION_TYPE.UPDATE_SEARCHING_STATE: {
      return action.state
    }
    default:
      return state;
  }
};
