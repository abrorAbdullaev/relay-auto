/* eslint-disable no-undef */
// @ts-nocheck
import { relayStorageNameConst } from "../Constants";
import {StorageServiceInterface} from "./StorageService";

export class Storage implements StorageServiceInterface {
  storageName = relayStorageNameConst;
  nameSpace = 'local';

  get(key: string): Promise<any>  {
    return new Promise((resolve, reject) => {
      try {
        const storageKey = `${this.storageName}.${key}`;
        chrome.storage[this.nameSpace].get([storageKey], (result) => resolve(result[storageKey]));
      } catch (e) {
        reject(e);
      }zz
    });
  }

  set(key: string, value: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        chrome.storage.local.set({ [`${this.storageName}.${key}`]: value });
      } catch (e) {
        reject(e);
      }
    });
  }

  addListener(listener: (val: any) => void, key: string, value?:string) {
    chrome.storage.onChanged.addListener((changes: object, areaName: string) => {
      console.log(changes);
      if (changes[key] && areaName === this.nameSpace) {
        if (value && changes[key] === value) {
          listener(changes[key]);
        } else {
          listener(changes[key]);
        }
      }
    });
  }
}
