import { Storage, defaultStorage } from "../Models";
import { relayStorageNameConst } from '../constants';

export class StorageService {
  initIsSearching(): Promise<boolean> {
    return new Promise((resolve) => {
      chrome.storage.local.remove(['isSearching']);

      chrome.storage.local.get(['relayStorage'], (res) => {
        console.log(res);
  
        // if (!res.relayStorage) {
        //   chrome.storage.local.set({ relayStorage: { assa: 'bassa' } }, () => {
        //     console.log(res.relayStorage);
        //     resolve(true);
        //   });
        // }
      });
    });
  } 
}
