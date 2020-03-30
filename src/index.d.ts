import { HookOptions, ReturnedValue } from './types';
export default function useSound(url: string, { volume, playbackRate, soundEnabled, interrupt, onload, ...delegated }?: HookOptions): ReturnedValue;
