import { Howl } from 'howler';

export declare type SpriteMap = {
  [key: string]: [number, number];
};
export interface HookOptions {
  volume?: number;
  playbackRate?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  sprite?: SpriteMap;
  onload?: () => void;
}
export interface PlayOptions {
  id?: string;
  forceSoundEnabled?: boolean;
  playbackRate?: number;
}
export declare type PlayFunction = (options: PlayOptions) => void;
export interface ExposedData {
  sound: Howl | null;
  stop: (id?: string) => void;
  pause: (id?: string) => void;
  duration: number | null;
}
export declare type ReturnedValue = [PlayFunction, ExposedData];
