// types.ts
export interface Point {
  x: number;
  y: number;
}

export interface Vector {
  dx: number;
  dy: number;
}

export interface Circle {
  center: Point;
  radius: number;
}

export interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR
}

export interface LogMessage {
  level: LogLevel;
  message: string;
  timestamp: Date;
}