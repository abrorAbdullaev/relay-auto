import { LogInterface, Log, StorageServiceInterface } from '../../../Shared';

export class LogsService implements LogInterface {
  private storageService: StorageServiceInterface;

  constructor(storageService: StorageServiceInterface) {
    this.storageService = storageService;
  }

  /**
   * @inheritdoc
   */
  async addLog(log: Log): Promise<boolean> {
    const logs = await this.getShiftedLogs();
    logs.push(log);

    return this.storageService.set('logs', logs);
  }

  /**
   * @inheritdoc
   */
  getLogs(): Promise<Array<Log>> {
    return this.storageService.get('logs');
  }

  /**
   * Gets the logs, if the logs count exceeds 20 then shifts the array and returns the result
   */
  private async getShiftedLogs(): Promise<Array<Log>> {
    const logs: Array<Log> = await this.storageService.get('logs');

    if (logs.length > 29) {
      logs.shift();
    }

    return logs;
  }
}
