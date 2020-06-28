import { Storage } from '../../../Shared'; 

export * from './StorageService';
export * from './FiltersService';
export * from './LogsService';

export const defaultStorage: Storage = {
  isInitialized: true,
  isSearching: false,
  refreshRate: 250,
  isLoggedIn: true,
  trucks: [],
  logs: []
}
