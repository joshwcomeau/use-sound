import React from 'react';
import useSound from '@';

import boopSfx from '../sounds/boop.mp3';
import Button from '../helpers/Button';

const Simple = () => {
  const [playBoop] = useSound(boopSfx);

  return <Button onClick={playBoop}>Play sound</Button>;
};

export default Simple;
