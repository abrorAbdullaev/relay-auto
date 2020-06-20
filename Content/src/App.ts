import { StorageService } from './Service';

export class App {
  private storageService: StorageService;

  constructor() {
    this.storageService = new StorageService();
  }

  async init() {
    const isInitialized = await this.storageService.isInitialized();
    !isInitialized && await this.storageService.initialize();

    this.storageService.addListener((value) => {
      // TODO Implement Search Features
    }, 'isSearching', true);
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