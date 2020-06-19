import { ACTION_TYPE } from "../constants/action-types";
import v4 from "uuid/v4";

export const addTruck = (name: string) => ({
  type: ACTION_TYPE.ADD_TRUCK,
  id: v4(),
  name,
});

export const editTruck = (id: string, name: string) => ({
  type: ACTION_TYPE.EDIT_TRUCK,
  id,
  name,
});

export const removeTruck = (id: string) => ({
  type: ACTION_TYPE.REMOVE_TRUCK,
  id,
});
