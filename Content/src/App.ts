import { StorageService } from './Service';
import { Load } from './Models';
import { getLoads } from './utils';

export class App {
  private storageService: StorageService;
  private interval: number = 0;

  constructor() {
    this.storageService = new StorageService();
  }

  async init() {
    await this.storageService.initialize();

    this.storageService.addListener(async () => {
      const refreshRate = await this.storageService.get('refreshRate');
      this.interval = setInterval(() => {
        getLoads().then((res) => {
          console.log(res);
        });
      }, refreshRate);
    }, 'isSearching', true);

    this.storageService.addListener(() => {
      clearInterval(this.interval);
    }, 'isSearching', false);
  }
}