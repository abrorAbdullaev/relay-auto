import { Storage } from '../../../Shared'; 

export * from './StorageService';

export const defaultStorage: Storage = {
  isSearching: false,
  trucks: [],
}
