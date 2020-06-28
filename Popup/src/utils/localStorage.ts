import {CHROME_DATA_KEYS, defaultStorage} from "../constants";

export default class Storage {
  public set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get(key: string): Promise<any> {
    return new Promise((resolve) => {
      const storageKey = key;
      return resolve(JSON.parse(localStorage.getItem(storageKey) as string));
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
