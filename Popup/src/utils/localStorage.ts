import {CHROME_DATA_KEYS} from "../constants";

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
