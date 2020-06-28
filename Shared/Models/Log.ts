export enum LogTypes {
  INFO,
  WARN,
  ERROR,
}

export interface Log {
  type: LogTypes;
  text: string;
}

export interface LogInterface {
  /**
   * Adds the log into storage, the storage length must be 20 and managed in the implementation of the interface
   * on content and popup side
   * 
   * @param log
   * @return Promise(<boolean>)
   */
  addLog(log: Log): Promise<boolean>;

  /**
   * Gets the logs from storage
   */
  getLogs(): Promise<Array<Log>>;
}