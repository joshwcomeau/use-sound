import { HookOptions, ReturnedValue } from './types';
export default function useSound(
  src: string | string[],
  {
    volume,
    playbackRate,
    soundEnabled,
    interrupt,
    onload,
    ...delegated
  }?: HookOptions
): ReturnedValue;
