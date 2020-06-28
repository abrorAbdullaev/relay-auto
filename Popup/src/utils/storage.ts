/* eslint-disable no-undef */
import { StorageServiceInterface } from "../../../Shared/Services";
import { defaultStorage } from "../constants";
import {Storage} from "../../../Shared/Models";

export class StorageService implements StorageServiceInterface {
  nameSpace: 'local' | 'sync' = 'local';

  get(key: string): Promise<any>  {
    return new Promise((resolve, reject) => {
      try {
        // @ts-ignore
        chrome.storage[this.nameSpace].get([`${key}`], (result) => {
          resolve(result[`${key}`])
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  set(key: string | string[], value: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage[`${this.nameSpace}`].set({[`${key}`]: value }, () => resolve(true));
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
          if(isInitialized) {
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
  getAll(): Promise<any>  {
    return new Promise((resolve, reject) => {
      try {
        // @ts-ignore
        chrome.storage[this.nameSpace].get(null, (result) => {
          resolve(result)
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}
