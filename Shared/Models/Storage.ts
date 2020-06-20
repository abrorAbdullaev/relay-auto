import { Truck } from "./Truck";

export interface Storage {
  isSearching: boolean;
  trucks: Truck[];
}

export const defaultStorage: Storage = {
  isSearching: false,
  trucks: [],
}
