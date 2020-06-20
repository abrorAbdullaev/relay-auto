export interface StorageServiceInterface {
  nameSpace: string;
  get(key: string): Promise<any>;
  set(key: string, value: any): Promise<boolean>;

  /**
   * Adds the listener to the storage
   * 
   * @param listener The method to be executed, accepts the new value of the changed parameter
   * @param key The key of the storage to be observed
   * @param value Optional, the value on which the listener should trigger
   */
  addListener(listener: Function, key: string, value?: any): void;
}