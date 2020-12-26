import { ACTION_TYPE } from "../constants";
import { Logs } from "../models/log";

export const updateLogsState = (state: Logs) => ({
  type: ACTION_TYPE.UPDATE_LOGS,
  state
});
