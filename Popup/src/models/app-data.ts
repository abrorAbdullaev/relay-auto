import { Logs } from './log';
import { Trucks } from './truck';

export interface AppData {
  trucks: Trucks
  isLoggedIn: boolean
  isSearching: boolean,
  logs: Logs,
}
