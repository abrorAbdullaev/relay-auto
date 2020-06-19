import { ACTION_TYPE } from '../constants';
import { Trucks } from '../models/truck';

export const trucksReducer = (state: Trucks, action: any) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TRUCK:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
        },
      };
    case ACTION_TYPE.EDIT_TRUCK:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          name: action.name,
        },
      };
    case ACTION_TYPE.REMOVE_TRUCK: {
      const trucks = { ...state };
      delete trucks[action.id];
      return { ...trucks };
    }
    default:
      return state;
  }
};
