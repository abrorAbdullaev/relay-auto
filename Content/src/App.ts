import { getLoads } from './utils';
import { AbstractApp } from './AbstractApp';

export class App extends AbstractApp {
  async init() {
    await this.storageService.set('isInitialized', false);

    await this.storageService.initialize();

    this.storageService.addListener(() => this.startSearching(), 'isSearching', true);
    this.storageService.addListener(() => this.stopSearching(), 'isSearching', false);

    // Test Run
    // this.startTesting();
  }

  /**
   * Listener to isSearching param change
   * If isSearching is set to true, the listener will perform request to server to receive loads list
   * 
   * @returns Promise(<boolean>)
   */
  private async startSearching(){
    const refreshRate = await this.storageService.get('refreshRate');

    this.interval = setInterval(async () => {      
      const trucks = await this.storageService.get('trucks');
      const relayResponse = await getLoads();
      const candidateLoads = await this.filtersService.collectCandidates(relayResponse.workOpportunities, trucks);

      console.log(candidateLoads);
    }, refreshRate);
  }

  /**
   * Listener to isSearching param change
   * if isSearching is set to false the listener will clear the interval for searching
   */
  private stopSearching(): void {
    clearInterval(this.interval);
  }

  /**
   * Run in init method if the app should run for testing after 2 seconds of inti for 2 seconds
   */
  private startTesting(): void {
    setTimeout(() => {
      this.storageService.set('isSearching', true).then(() => {
        setTimeout(() => {
          this.storageService.set('isSearching', false);
        }, 2000);
      });
    }, 4000)
  }
}