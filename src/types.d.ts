/// <reference types="howler" />
export declare type SpriteMap = {
  [key: string]: [number, number];
};

export interface IHowlProperties {
  autoplay?: boolean;
  buffer?: boolean;
  duration?: number;
  format?: string;
  loop?: boolean;
  src?: string;
  volume?: number;
  urls?: string[];
  rate?: number;
  model?: 'equalpower' | 'HRTF';
  onend?: Function;
  onloaderror?: Function;
  onpause?: Function;
  onplay?: Function;
}

export interface HookOptions extends IHowlProperties {
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
  isPlaying: boolean;
  duration: number | null;
}
export declare type ReturnedValue = [PlayFunction, ExposedData];
