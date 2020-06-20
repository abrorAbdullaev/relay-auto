import { Storage } from '../../../Shared'; 

export * from './StorageService';

export const defaultStorage: Storage = {
  isInitialized: true,
  isSearching: false,
  refreshRate: 250,
  isLoggedIn: true,
  trucks: [],
}
