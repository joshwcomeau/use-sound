import React from 'react';
import styled from 'styled-components';
import useSound from '@';

import Button from '../helpers/Button';

import drumSfx from '../sounds/909-drums.mp3';

const useKeyboardBindings = map => {
  React.useEffect(() => {
    const handlePress = ev => {
      const handler = map[ev.key];

      if (typeof handler === 'function') {
        handler();
      }
    };

    window.addEventListener('keydown', handlePress);

    return () => {
      window.removeEventListener('keydown', handlePress);
    };
  }, [map]);
};

function DrumMachine() {
  const [play] = useSound(drumSfx, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    },
  });

  // Custom hook that listens for 'keydown',
  // and calls the appropriate handler function.
  useKeyboardBindings({
    1: () => play({ id: 'kick' }),
    2: () => play({ id: 'hihat' }),
    3: () => play({ id: 'snare' }),
    4: () => play({ id: 'cowbell' }),
  });

  return (
    <>
      <PressyButton aria-label="kick" onMouseDown={() => play({ id: 'kick' })}>
        1
      </PressyButton>
      <PressyButton
        aria-label="hihat"
        onMouseDown={() => play({ id: 'hihat' })}
      >
        2
      </PressyButton>
      <PressyButton
        aria-label="snare"
        onMouseDown={() => play({ id: 'snare' })}
      >
        3
      </PressyButton>
      <PressyButton
        aria-label="cowbell"
        onMouseDown={() => play({ id: 'cowbell' })}
      >
        4
      </PressyButton>
    </>
  );
}

const PressyButton = styled(Button)`
  display: inline-block;
  margin: 10px;
  transform-origin: center center;

  &:active {
    transform: scale(1.1);
  }
`;

export default DrumMachine;
