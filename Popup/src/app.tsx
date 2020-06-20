import React, { useEffect, useState } from 'react';
import AppDataProvider from './components/app-data-provider';
import LocalStorage from './utils/localStorage';
import Storage from '../../Shared/Services/Storage';
import { AppData } from './models/app-data';
import { ENV_DEVELOPMENT } from './constants';
import AppContent from './components/app-content';
import initialData from './mock/initial-data';

const storage: Storage = process.env.NODE_ENV === ENV_DEVELOPMENT
  ? new LocalStorage() // Is used to imitate Chrome Extensions Storage API during dev process
  : new Storage();

const App = () => {
  const [isDataLoaded, setDataLoaded] = useState<boolean>(false);
  const [data, setData] = useState<AppData>({
    trucks: {},
  });

  const fetchAppData = async (): Promise<void> => {
    const {
      trucks,
    } = await storage.getDataObject([
      'trucks',
    ]);

    setData({
      ...data,
      trucks: trucks || {},
    });

    setDataLoaded(true);
  };

  const mockData = () => {
    storage.saveData('trucks', initialData.trucks);
  }

  useEffect((): void => {
    // mockData()
    fetchAppData().then();
  }, []);

  return (
    isDataLoaded
      ? (
        <AppDataProvider storage={storage} data={data}>
          <AppContent/>
        </AppDataProvider>
      ) : <span>Loading</span>
  );
};

export default App;