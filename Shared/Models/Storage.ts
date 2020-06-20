import { Truck } from "./Truck";

export interface Storage {
  isInitialized: boolean;
  isSearching: boolean;
  refreshRate: number;
  isLoggedIn: boolean;
  trucks: Truck[];
}
