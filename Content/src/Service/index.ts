import { Storage } from '../../../Shared';

export * from './StorageService';
export * from './FiltersService';
export * from './LogsService';

export const defaultStorage: Storage = {
  isInitialized: true,
  isSearching: false,
  refreshRate: 1000,
  isLoggedIn: false,
  trucks: [],
  logs: []
}
