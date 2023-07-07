import type { Howl } from 'howler';

export type SpriteMap = {
  [key: string]: [number, number];
};

export type HookOptions<T = any> = T & {
  id?: string;
  volume?: number;
  playbackRate?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  sprite?: SpriteMap;
  onload?: () => void;
};

export interface PlayOptions {
  id?: string;
  forceSoundEnabled?: boolean;
  playbackRate?: number;
}

export type PlayFunction = (options?: PlayOptions) => void;

export interface ExposedData {
  sound: Howl | null;
  stop: (id?: number) => void;
  pause: (id?: number) => void;
  duration: number | null;
}

export type ReturnedValue = [PlayFunction, ExposedData];
