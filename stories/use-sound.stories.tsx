import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { useSound } from '@';

import boopSfx from './boop.mp3';
import fanfareSfx from './fanfare.mp3';
import glugSfx from './glug.mp3';

export default {
  title: 'useSound',
  decorators: [withKnobs],
};

export const Simple = () => {
  const [playBoop] = useSound(boopSfx);

  return <button onClick={playBoop}>Play SFX</button>;
};

Simple.story = {
  name: 'Default',
};

export const Toggleable = () => {
  const [play, { isPlaying, stop }] = useSound(fanfareSfx);

  return (
    <button onClick={isPlaying ? stop : play}>
      {isPlaying ? 'Stop' : 'Play'}
    </button>
  );
};

Toggleable.story = {
  name: 'Toggle start/stop',
};

export const Interrupt = () => {
  const interrupt = boolean('Interrupt', false);

  const [play] = useSound(fanfareSfx, { interrupt });

  return (
    <>
      <button onClick={play}>Play sound</button>
      <br />
      <br />
      (Use the "Knobs" tab below to toggle <em>Interrupt</em>)
    </>
  );
};

Interrupt.story = {
  name: 'Interruptible',
};

export const RisingPitch = () => {
  const [pitchMultiple, setPitchMultiple] = React.useState(0.75);
  const isAscending = React.useRef(false);

  const [play] = useSound(glugSfx, {
    playbackRate: pitchMultiple,
    interrupt: true,
  });

  const handleClick = () => {
    if (pitchMultiple < 0.75 || pitchMultiple > 1.5) {
      isAscending.current = !isAscending.current;
    }

    setPitchMultiple(pitchMultiple + 0.1 * (isAscending.current ? 1 : -1));

    play();
  };

  /* eslint-disable jsx-a11y/accessible-emoji */
  return (
    <>
      <button aria-label="Trigger sound effect" onClick={handleClick}>
        🗣
      </button>
    </>
  );
  /* eslint-enable jsx-a11y/accessible-emoji */
};

RisingPitch.story = {
  name: 'Rising Pitch',
};
