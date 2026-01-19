// types.ts
export interface Vector2 {
  x: number;
  y: number;
}

export interface Vector3 extends Vector2 {
  z: number;
}

export interface BoundingBox {
  min: Vector3;
  max: Vector3;
}

export interface Transform {
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
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