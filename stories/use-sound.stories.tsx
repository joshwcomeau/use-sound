import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { useSound } from '@';

import boopSfx from '../example/boop.mp3';
import fanfareSfx from '../example/fanfare.mp3';
import dunDunDunSfx from '../example/dun-dun-dun.mp3';

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

export const Sprite = () => {
  const [play] = useSound(fanfareSfx, {
    sprite: {
      first: [0, 321],
      second: [321, 660],
      third: [660, 2184],
    },
  });

  return (
    <>
      <button onClick={play.first}>🎵</button>
      <button onClick={play.second}>🎶</button>
      <button onClick={play.third}>🎼</button>
      <br />
      <br />
      (Use the "Knobs" tab below to toggle <em>Interrupt</em>)
    </>
  );
};

Sprite.story = {
  name: 'Sprite',
};
