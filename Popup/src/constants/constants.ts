import { Storage } from "../../../Shared/Models";

export const ENV_DEVELOPMENT = 'development';
export const ENV_PRODUCTION = 'production';

export const CHROME_STORAGE_KEY = 'relayAuto';
export const defaultStorage: Storage = {
  isInitialized: true,
  isSearching: false,
  refreshRate: 250,
  isLoggedIn: true,
  trucks: [],
  logs: [],
}

export const CHROME_DATA_KEYS = [
  'trucks',
  'isLoggedIn',
  'isSearching',
  'logs',
]