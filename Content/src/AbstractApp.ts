import { StorageService, FiltersService } from "./Service";

export abstract class AbstractApp {
  protected storageService: StorageService;
  protected filtersService: FiltersService;
  protected interval: number = 0;

  constructor() {
    this.storageService = new StorageService();
    this.filtersService = new FiltersService();
  }

  abstract async init();
}