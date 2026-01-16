// types.ts
export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
  FATAL
}

export interface LogMessage {
  level: LogLevel;
  timestamp: Date;
  message: string;
  context?: string;
}

export interface EngineConfig {
  logLevel: LogLevel;
  maxLogSize: number;
  enableDebugMode: boolean;
}

export class EngineError extends Error {
  constructor(message: string, public code: number) {
    super(message);
  }
}