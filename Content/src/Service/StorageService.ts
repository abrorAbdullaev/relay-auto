import { StorageServiceInterface, relayStorageNameConst } from '../../../Shared';
import { defaultStorage } from './';

export class StorageService implements StorageServiceInterface {
  storageName = relayStorageNameConst;
  nameSpace = 'local';

  get(key: string): Promise<any>  {
    return new Promise((resolve, reject) => {
      try {
        const storageKey = `${this.storageName}.${key}`;
        chrome.storage[this.nameSpace].get([storageKey], (result) => resolve(result[storageKey]));
      } catch (e) {
        reject(e);
      }
    });
  }

  set(key: string, value: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage[this.nameSpace].set({ [`${this.storageName}.${key}`]: value }, () => resolve(true));
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Adds the listener to the storage
   * 
   * @param listener The method to be executed, accepts the new value of the changed parameter
   * @param key The key of the storage to be observed
   * @param value Optional, the value on which the listener should trigger
   */
  addListener(listener: (val: any) => void, key: string, value?: any) {
    chrome.storage.onChanged.addListener((changes: object, areaName: string) => {
      if (
        !changes[`${this.storageName}.${key}`] 
        || value && value !== changes[`${this.storageName}.${key}`].newValue
        || areaName !== this.nameSpace) {
        return;
      }

      listener(changes[`${this.storageName}.${key}`]);
    });
  }

  isInitialized(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage[this.nameSpace].get([this.storageName], (result) => {
          console.log('Result: ', result);
          resolve(!!result)
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  initialize(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage[this.nameSpace].get([this.storageName], (result) => {
          Object.keys(result).length === 0 && result.constructor === Object 
            ? chrome.storage[this.nameSpace].set({ [`${this.storageName}`]: defaultStorage }, () => resolve(true))
            : resolve(true);
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}
