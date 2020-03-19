import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import { useSpriteSound } from '@';

import dunDunDunSfx from './dun-dun-dun.mp3';

export default {
  title: 'useSoundSprite',
  decorators: [withKnobs],
};

export const Sprite = () => {
  const [play] = useSpriteSound(
    dunDunDunSfx,
    {
      first: [0, 321],
      second: [321, 630 - 321],
      third: [660, 2184 - 660],
    },
    { interrupt: true }
  );

  /* eslint-disable jsx-a11y/accessible-emoji */

  return (
    <>
      <button aria-label="first note" onClick={play.first}>
        🎵
      </button>
      <button aria-label="second note" onClick={play.second}>
        🎶
      </button>
      <button aria-label="third note" onClick={play.third}>
        🎼
      </button>
    </>
  );

  /* eslint-enable jsx-a11y/accessible-emoji */
};

Sprite.story = {
  name: 'Sprite',
};
