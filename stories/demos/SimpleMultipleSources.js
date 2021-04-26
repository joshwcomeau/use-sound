import React from 'react';
import useSound from '@';

import sound1 from '../sounds/pop-off.wav';
import sound2 from '../sounds/pop-off.mp3';

import Button from '../helpers/Button';


const sourceOrderMapping = {
  'wav_mp3': [sound1, sound2],
  'mp3_wav': [sound2, sound1],
};

const MultipleSourcesDemo = ({order}) => {
  const [play] = useSound(sourceOrderMapping[order]);

  return <Button onClick={play}>Play sound</Button>;
};

export default MultipleSourcesDemo;
