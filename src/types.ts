// types.ts
export interface Vector2 {
  x: number;
  y: number;
}

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface Bounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
}

export interface Entity {
  id: string;
  name: string;
  position: Vector3;
  rotation: Vector3;
}

export enum EntityType {
  PLAYER,
  ENEMY,
  OBSTACLE,
}

export interface Component {
  entityId: string;
  type: string;
  data: any;
}

export class CoreError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CoreError';
  }
}