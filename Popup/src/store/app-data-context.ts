import React from 'react';
import { AppData } from '../models/app-data';

export const AppDataContext = React.createContext<AppData & { dispatch: any }>({
  trucks: [],
  isLoggedIn: false,
  isSearching: false,
  dispatch: undefined as any,
  logs: [],
});
