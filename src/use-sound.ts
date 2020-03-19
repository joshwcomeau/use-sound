import React from 'react';

import useOnMount from './use-on-mount';

import { HookOptions, PlayOptions, PlayFunction, ReturnedValue } from './types';

export default function useSound(
  url: string,
  {
    volume = 1,
    playbackRate = 1,
    soundEnabled = true,
    interrupt = false,
    ...delegated
  }: HookOptions = {}
) {
  const HowlConstructor = React.useRef<HowlStatic | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const [sound, setSound] = React.useState<Howl | null>(null);

  // We want to lazy-load Howler, since sounds can't play on load anyway.
  useOnMount(() => {
    import('howler').then(mod => {
      HowlConstructor.current = mod.Howl;

      const sound = new HowlConstructor.current({
        src: [url],
        volume,
        ...delegated,
      });

      setSound(sound);
    });
  });

  // When the URL changes, we have to do a whole thing where we recreate
  // the Howl instance. This is because Howler doesn't expose a way to
  // tweak the sound
  React.useEffect(() => {
    if (HowlConstructor.current && sound) {
      setSound(
        new HowlConstructor.current({
          src: [url],
          volume,
          ...delegated,
        })
      );
    }
    // The linter wants to run this effect whenever ANYTHING changes,
    // but very specifically I only want to recreate the Howl instance
    // when the `url` changes. Other changes should have no effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  // Whenever volume/playbackRate are changed, change those properties
  // on the sound instance.
  React.useEffect(() => {
    if (sound) {
      sound.volume(volume);
      sound.rate(playbackRate);
    }
    // A weird bug means that including the `sound` here can trigger an
    // error on unmount, where the state loses track of the sprites??
    // No idea, but anyway I don't need to re-run this if only the `sound`
    // changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume, playbackRate]);

  const play: PlayFunction = React.useCallback(
    (options: PlayOptions = {}) => {
      if (!sound || (!soundEnabled && !options.forceSoundEnabled)) {
        return;
      }

      if (interrupt) {
        sound.stop();
      }

      sound.play(options.id);

      sound.once('end', () => setIsPlaying(false));

      setIsPlaying(true);
    },
    [sound, soundEnabled, interrupt]
  );

  const stop = React.useCallback(() => {
    if (!sound) {
      return;
    }
    sound.stop();
    setIsPlaying(false);
  }, [sound]);

  const returnedValue: ReturnedValue = [
    play,
    {
      sound,
      stop,
      isPlaying,
    },
  ];

  return returnedValue;
}
