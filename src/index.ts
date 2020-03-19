import React from 'react';

interface Options {
  volume?: number;
  playbackRate?: number;
  onend?: (soundId: number) => void;
  soundEnabled?: boolean;
}

export default function useSound(
  url: string,
  {
    volume = 1,
    playbackRate = 1,
    soundEnabled = true,
    ...delegated
  }: Options = {}
) {
  const [Howl, setHowl] = React.useState<HowlStatic | null>(null);

  const [sound, setSound] = React.useState<Howl | null>(null);

  React.useEffect(() => {
    import('howler').then(({ Howl }) => {
      setHowl(() => Howl);

      const sound = new Howl({
        src: [url],
        volume,
        ...delegated,
      });

      setSound(sound);
    });
  }, []);

  React.useEffect(() => {
    if (Howl && sound) {
      // @ts-ignore
      if (sound._src !== url) {
        setSound(
          new Howl({
            src: [url],
            volume,
            ...delegated,
          })
        );
      }

      sound.volume(volume);
      sound.rate(playbackRate);
    }
  }, [url, volume, playbackRate]);

  const play = React.useCallback(
    (options = {}) => {
      if (!sound || (!soundEnabled && !options.override)) {
        return;
      }

      if (options.rate) {
        sound.rate(options.rate);
      }

      sound.play();
    },
    [sound, soundEnabled]
  );

  const stop = React.useCallback(() => {
    if (!sound) {
      return;
    }
    sound.stop();
  }, [sound]);

  return [play, stop];
}
