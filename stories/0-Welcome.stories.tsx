import React from 'react';
import useSound from '@';

import boopSfx from '../example/boop.mp3';

export default {
  title: 'Stories',
};

export const simple = () => {
  const [playBoop] = useSound(boopSfx);

  return <button onClick={playBoop}>Play SFX</button>;
};

simple.story = {
  name: 'Default',
};
