export interface Storage {
  isSearching: boolean;
  [key: string]: any;
}

export const defaultStorage: Storage = {
  isSearching: false,
}
