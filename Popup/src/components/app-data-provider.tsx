import React, { useState, useReducer, useEffect } from 'react';
import { AppDataContext } from '../store/app-data-context';
import { AppData } from '../models/app-data';
import { getRootReducer } from '../reducers';
import { StorageService } from '../utils/storage';
import { updateLogsState } from '../actions/logs';
import { Logs } from '../models/log';

const AppDataProvider = ({ data, storage, children }: PropTypes) => {
  const [isEventsRegistered, setIsEventsRegistered] = useState<boolean>(false);
  const [state, dispatch] = useReducer(getRootReducer(storage), { ...data });

  useEffect(() => {
    if (!isEventsRegistered) {
      console.log('Registered');

      storage.addListener((value: { newValue: Logs }) => {
        console.log(value);
        dispatch(updateLogsState(value.newValue));
      }, 'logs');

      setIsEventsRegistered(true);
    }
  });

  return (
    <AppDataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppDataContext.Provider>
  );
};

interface PropTypes {
  data: AppData
  storage: StorageService
  children: JSX.Element | JSX.Element[]
}

export default AppDataProvider;
