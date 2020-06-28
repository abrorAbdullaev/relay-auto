import { StorageService, FiltersService, LogsService } from "./Service";

export abstract class AbstractApp {
  protected storageService: StorageService;
  protected filtersService: FiltersService;
  protected logsService: LogsService;
  protected interval: number = 0;

  constructor() {
    this.storageService = new StorageService();
    this.filtersService = new FiltersService();
    this.logsService = new LogsService(this.storageService);
  }

  abstract async init();
}