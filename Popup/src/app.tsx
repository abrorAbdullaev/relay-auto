import React, { useEffect, useState } from 'react';
import AppDataProvider from './components/app-data-provider';
import LocalStorage from './utils/localStorage';
import { StorageService } from './utils/storage';
import { AppData } from './models/app-data';
import { CHROME_DATA_KEYS, ENV_DEVELOPMENT } from './constants';
import AppContent from './components/app-content';
import initialData from './mock/initial-data';

// chrome.storage.local.clear(function() {
//   var error = chrome.runtime.lastError;
//   if (error) {
//     console.error(error);
//   }
// });

const storage: any = process.env.NODE_ENV === ENV_DEVELOPMENT
  ? new LocalStorage() // Is used to imitate Chrome Extensions Storage API during dev process
  : new StorageService();

const App = () => {
  const [isDataLoaded, setDataLoaded] = useState<boolean>(false);
  const [data, setData] = useState<AppData>({
    trucks: [],
    isLoggedIn: false,
    isSearching: false,
    logs: [],
  });

  const initializeData = async () => await storage.initialize();
  const fetchAppData = async (): Promise<void> => {
    const {
      trucks,
      isLoggedIn,
      isSearching,
      logs,
    } = await storage.getAll();

    setData({
      ...data,
      trucks: trucks || [],
      isLoggedIn,
      isSearching,
      logs,
    });

    setDataLoaded(true);
  };

  const mockData = () => {
    storage.set('trucks', initialData.trucks);
    storage.set('isLoggedIn', initialData.isLoggedIn);
    storage.set('isSearching', initialData.isSearching);
    storage.set('logs', initialData.logs);
  }
  // mockData(); // Use for testing on development

  useEffect((): void => {
    initializeData().then();
    fetchAppData().then();
  }, []);

  return (
    isDataLoaded
      ? (
        <AppDataProvider storage={storage} data={data}>
          <AppContent />
        </AppDataProvider>
      ) : <span>Loading</span>
  );
};

export default App;
