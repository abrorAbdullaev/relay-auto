import React, { useReducer } from 'react';
import { AppDataContext } from '../store/app-data-context';
import { AppData } from '../models/app-data';
import { getRootReducer } from '../reducers';
import Storage from '../utils/storage';

const AppDataProvider = ({ data, storage, children }: PropTypes) => {
  const [state, dispatch] = useReducer(getRootReducer(storage), { ...data });

  return (
    <AppDataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppDataContext.Provider>
  );
};

interface PropTypes {
  data: AppData
  storage: Storage
  children: JSX.Element | JSX.Element[]
}

export default AppDataProvider;
