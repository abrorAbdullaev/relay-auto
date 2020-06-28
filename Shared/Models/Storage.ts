import { Truck } from "./Truck";
import { Log } from './Log';

export interface Storage {
  isInitialized: boolean;
  isSearching: boolean;
  refreshRate: number;
  isLoggedIn: boolean;
  trucks: Truck[];
  logs: Log[];
}