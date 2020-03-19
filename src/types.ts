export type SpriteMap = {
  [key: string]: [number, number];
};

export interface HookOptions {
  volume?: number;
  playbackRate?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  sprite?: SpriteMap;
}

export interface PlayOptions {
  id?: string;
  forceSoundEnabled?: boolean;
  rate?: number;
}

export type PlayFunction = (options: PlayOptions) => void;

export interface ExposedData {
  sound: Howl | null;
  stop: (id?: number) => void;
  isPlaying: boolean;
}

export type ReturnedValue = [PlayFunction, ExposedData];
