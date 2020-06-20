import { StorageService } from './Service';

export class App {
  private storageService: StorageService;
  private interval: number = 0;

  constructor() {
    this.storageService = new StorageService();
  }

  async init() {
    await this.storageService.initialize();

    this.storageService.addListener(async (value) => {
      const refreshRate = await this.storageService.get('refreshRate');

      this.interval = setInterval(() => {
        console.log('Next Time Check');
      }, refreshRate);
    }, 'isSearching', true);

    this.storageService.addListener((value) => {
      clearInterval(this.interval);
    }, 'isSearching', false);

    // setTimeout(() => {
    //   this.storageService.set('isSearching', true).then(() => {
    //     setTimeout(() => {
    //       this.storageService.set('isSearching', false);
    //     }, 2000);
    //   })
    // }, 2000);
  }
 
  // registerEvents(): void {
  //   chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  //     if (request.getLoadsList) {
  //       var xhr = new XMLHttpRequest();
  //       xhr.open("GET", 'https://relay.amazon.com/api/tours/loadboard', true);
  //       xhr.setRequestHeader('Content-Type', 'application/json');
  //       xhr.withCredentials = true;

  //       xhr.send(JSON.stringify({
  //           sortByField: 'startTime',
  //           sortOrder: 'asc',
  //           resultSize: 200,
    
  //           minPayout: 3000, // TODO Make dynamic within popup
  //       }));

  //       xhr.onreadystatechange = () => {
  //         if (xhr.readyState == XMLHttpRequest.DONE) {
  //           sendResponse({ list: xhr.response });
  //         }
  //       }

  //       return true;
  //     }
  //   });
  // }
}