import { StorageServiceInterface, Storage } from '../../../Shared';
import { defaultStorage } from "./index";

export class StorageService implements StorageServiceInterface {
  nameSpace: "local" | "sync" = "local";

  /**
   * Gets the value by param name from the storage
   * 
   * @param key name of the param
   */
  get(key: keyof Storage): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage[this.nameSpace].get([`${key}`], (result) => {
          resolve(result[`${key}`])
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  /**
   * Sets or updates the value of the key in the chrome extension storage,
   * if the set operation fails, rejects the promise
   * 
   * @param key The name of the param
   * @param value The value of the param
   * 
   * @returns Promise(<boolean>)
   */
  set(key: keyof Storage, value: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage[this.nameSpace].set({ [`${key}`]: value }, () => resolve(true));
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
  addListener(listener: (val: any) => void, key: keyof Storage, value?: any) {
    chrome.storage.onChanged.addListener((changes: object, areaName: string) => {
      if (
        !changes[`${key}`]
        || value && value !== changes[`${key}`].newValue
        || areaName !== this.nameSpace) {
        return;
      }

      listener(changes[`${key}`]);
    });
  }

  initialize(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        this.get('isInitialized').then((isInitialized) => {
          if (isInitialized) {
            resolve(true);
            return;
          }

          Promise.all(Object.entries(defaultStorage).map(([keyName, keyValue]) =>
            this.set(`${keyName}` as keyof Storage, keyValue))).then((allTrue) => {
              allTrue.every(Boolean)
                ? resolve(true)
                : reject('Some values in storage are not set successfully!');
            }
            );
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}
