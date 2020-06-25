import { Storage } from '../../../Shared'; 

export * from './StorageService';
export * from './FiltersService';

export const defaultStorage: Storage = {
  isInitialized: true,
  isSearching: false,
  refreshRate: 250,
  isLoggedIn: true,
  trucks: [
    {
      id: 'testID',
      name: 'Test Name'
    },
    {
      id: 'testID2',
      name: 'Test Name 2'
    }
  ],
}
