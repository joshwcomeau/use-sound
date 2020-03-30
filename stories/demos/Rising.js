import React from 'react';
import styled from 'styled-components';
import useSound from '@';

import UnstyledButton from '../helpers/UnstyledButton';

import glugSfx from '../sounds/glug-a.mp3';

function Rising() {
  const [playbackRate, setPlaybackRate] = React.useState(0.75);

  const [play] = useSound(glugSfx, {
    playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
    <Button onClick={handleClick}>
      <span role="img" aria-label="Heart">
        💖
      </span>
    </Button>
  );
}

const Button = styled(UnstyledButton)`
  display: inline-flex;
  align-items: center;
  font-size: 64px;
  margin-top: 16px;
  transform-origin: center center;

  &:active {
    transform: scale(1.1);
  }
`;

export default Rising;
