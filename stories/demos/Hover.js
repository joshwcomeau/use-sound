import React from 'react';
import styled from 'styled-components';
import useSound from '@';

import popsSfx from '../sounds/rising-pops.mp3';

import UnstyledButton from '../helpers/UnstyledButton';
import Spacer from '../helpers/Spacer';
import { PRIMARY } from '../helpers/constants';

const ARROW_DELAY = 125;

function Hover() {
  const [play, { stop }] = useSound(popsSfx, { volume: 0.5 });

  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <Button
      onMouseEnter={() => {
        setIsHovering(true);
        play();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        stop();
      }}
    >
      <ButtonContents isHovering={isHovering}>Hover over me!</ButtonContents>
    </Button>
  );
}

const ButtonContents = ({ isHovering, children }) => {
  return (
    <>
      {children}
      <Spacer size={8} />
      <ArrowSvg width="36" height="12" viewBox="0 0 36 12" fill="none">
        <path
          d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
          stroke={PRIMARY}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: true ? 1 : 0,
            transition: `opacity ${isHovering ? 0 : ARROW_DELAY}ms`,
          }}
        />

        <path
          d="M15 10L19.5 5.5L15 1"
          stroke={PRIMARY}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: isHovering ? 1 : 0,
            transition: `opacity ${isHovering ? 0 : ARROW_DELAY}ms`,
          }}
        />
        <path
          d="M23 10L27.5 5.5L23 1"
          stroke={PRIMARY}
          strokeOpacity="0.66"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: isHovering ? 1 : 0,
            transition: `opacity ${
              isHovering ? 0 : ARROW_DELAY
            }ms ${ARROW_DELAY}ms`,
          }}
        />
        <path
          d="M31 10L35.5 5.5L31 1"
          stroke={PRIMARY}
          strokeOpacity="0.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: isHovering ? 1 : 0,
            transition: `opacity ${
              isHovering ? 0 : ARROW_DELAY
            }ms ${ARROW_DELAY * 2}ms`,
          }}
        />
      </ArrowSvg>
    </>
  );
};

const Button = styled(UnstyledButton)`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  margin-top: 16px;
  color: var(--color-text);
  font-weight: var(--font-weight-bold);
`;

const ArrowSvg = styled.svg`
  transform: translateY(2px);
`;

export default Hover;
