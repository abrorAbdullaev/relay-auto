export enum LogTypes {
  INFO,
  WARN,
  ERROR,
}

export interface Log {
  type: LogTypes;
  text: string;
}

export type Logs = Log[];
