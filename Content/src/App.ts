import { getLoads } from './utils';
import { AbstractApp } from './AbstractApp';
import { Log, LogTypes, Truck } from '../../Shared';

export class App extends AbstractApp {
  async init() {
    // await this.storageService.set('isInitialized', false);
    await this.storageService.initialize();

    this.storageService.addListener(() => this.startSearching(), 'isSearching', true);
    this.storageService.addListener(() => this.stopSearching(), 'isSearching', false);
  }

  /**
   * Listener to isSearching param change
   * If isSearching is set to true, the listener will perform request to server to receive loads list
   * 
   * @returns Promise(<boolean>)
   */
  private async startSearching() {
    const trucks: Array<Truck> = await this.storageService.get('trucks');

    if (!trucks.length) {
      await this.logsService.addLog({ type: LogTypes.WARN, text: 'Cannot start the search because no trucks found!' });
      await this.storageService.set('isSearching', false);
      return;
    }

    const refreshRate: number = await this.storageService.get('refreshRate');

    await this.logsService.addLog({
      type: LogTypes.INFO, text:
        'Starting the search with refresh rate: ' +
        refreshRate + ' And trucks: ' +
        trucks.map((truck) => truck.name).join(', '),
    } as Log);

    this.interval = setInterval(async () => {
      const relayResponse = await getLoads();
      await this.logsService.addLog({
        type: LogTypes.INFO,
        text: 'Relay responded with ' + relayResponse.workOpportunities.length + ' loads',
      });

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
