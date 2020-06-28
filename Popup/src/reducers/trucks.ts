import { ACTION_TYPE } from '../constants';
import { Trucks } from '../models/truck';

export const trucksReducer = (state: Trucks = [], action: any) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TRUCK:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
        },
      ];
    case ACTION_TYPE.EDIT_TRUCK:
      return state.map(truck => {
        return truck.id === action.id ?
          {
            ...truck,
            name: action.name,
          }
          : truck;
      });
    case ACTION_TYPE.REMOVE_TRUCK: {
      const trucks = [ ...state ];
      return trucks.filter(truck => truck.id !== action.id)
    }
    default:
      return state || [];
  }
};
