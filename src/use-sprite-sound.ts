import useSound from './use-sound';

import { HookOptions, PlayFunction, PlayOptions, SpriteMap } from './types';

type PlayFunctions = {
  [key: string]: PlayFunction;
};

export default function useSpriteSound(
  url: string,
  sprite: SpriteMap,
  hookOptions: HookOptions
) {
  const [play, options] = useSound(url, { ...hookOptions, sprite });

  const initial: PlayFunctions = {};

  const playFunctions = Object.keys(sprite).reduce(
    (acc, spriteKey): PlayFunctions => {
      acc[spriteKey] = (playOptions: PlayOptions = {}) =>
        play({ ...playOptions, id: spriteKey });

      return acc;
    },
    initial
  );

  return [playFunctions, options];
}
