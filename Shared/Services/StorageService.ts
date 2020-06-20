export interface StorageServiceInterface {
  nameSpace: string;
  storageName: string;

  get(key: string): Promise<any>;
  set(key: string, value: any): Promise<boolean>;
  addListener(listener: () => Promise<any>, key: string, value?: string): void;
}