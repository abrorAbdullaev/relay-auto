import { CHROME_DATA_KEYS, defaultStorage } from "../constants";

export default class Storage {
  nameSpace: 'local' | 'sync' = 'local';

  public set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get(key: string): Promise<any> {
    return new Promise((resolve) => {
      const storageKey = key;
      return resolve(JSON.parse(localStorage.getItem(storageKey) as string));
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
    return;

    // localStorage.onChanged.addListener((changes: object, areaName: string) => {
    //   if (
    //     !changes[`${key}`]
    //     || value && value !== changes[`${key}`].newValue
    //     || areaName !== this.nameSpace) {
    //     return;
    //   }

    //   listener(changes[`${key}`]);
    // });
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

  public getAll(keys = CHROME_DATA_KEYS): Promise<any> {
    return new Promise((resolve) => {
      const res: any = keys.reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: JSON.parse(localStorage.getItem(curr) as string),
        }), {},
      );

      return resolve(res);
    });
  }
}
