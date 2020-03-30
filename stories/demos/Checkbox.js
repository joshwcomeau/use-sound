import React from 'react';
import styled from 'styled-components';
import useSound from '@';
import { useSpring, animated } from 'react-spring';

import popDown from '../sounds/pop-down.mp3';
import popUpOn from '../sounds/pop-up-on.mp3';
import popUpOff from '../sounds/pop-up-off.mp3';
import { PRIMARY } from '../helpers/constants';

const BORDER_WIDTH = 2;

function CheckboxDemo() {
  const [isChecked, setIsChecked] = React.useState(false);

  const [playActive] = useSound(popDown, { volume: 0.25 });
  const [playOn] = useSound(popUpOn, { volume: 0.25 });
  const [playOff] = useSound(popUpOff, { volume: 0.25 });

  return (
    <Checkbox
      name="demo-checkbox"
      checked={isChecked}
      size={24}
      onChange={() => setIsChecked(!isChecked)}
      onMouseDown={playActive}
      onMouseUp={() => {
        isChecked ? playOff() : playOn();
      }}
    />
  );
}

const Checkbox = ({
  size = 18,
  name,
  checked,
  label,
  onChange,
  onMouseDown,
  onMouseUp,
}) => {
  const [active, setActive] = React.useState(false);

  const springConfig = {
    tension: 400,
    friction: 22,
    clamp: !checked,
  };

  const filledScale = checked ? (active ? 1.4 : 1) : 0;
  const filledSpring = useSpring({
    transform: `scale(${filledScale})`,
    config: springConfig,
  });

  const outlineScale = active ? 0.8 : 1;
  const outlineSpring = useSpring({
    transform: `scale(${outlineScale})`,
    config: springConfig,
  });

  return (
    <Wrapper>
      <RealCheckbox
        onMouseDown={() => {
          setActive(true);
          onMouseDown();
        }}
        onMouseUp={() => {
          setActive(false);
          onMouseUp();
        }}
        onChange={onChange}
        onClick={onChange}
      />
      <VisibleContents>
        <VisibleBox style={{ width: size, height: size, ...outlineSpring }}>
          <Filled style={filledSpring} />
        </VisibleBox>

        <Text>{label}</Text>
      </VisibleContents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const RealCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const VisibleContents = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
`;

const VisibleBox = styled(animated.div)`
  position: relative;
  border: ${BORDER_WIDTH}px solid #555;
  border-radius: 4px;
  margin-right: 8px;

  ${RealCheckbox}:hover + ${VisibleContents} & {
    border-color: #111;
  }

  ${RealCheckbox}:focus.focus-visible + ${VisibleContents} & {
    outline: 2px auto ${PRIMARY};
    outline-offset: 2px;
  }
`;

const Filled = styled(animated.div)`
  position: absolute;
  z-index: 1;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background: ${PRIMARY};
  border-radius: 2px;
`;

const Text = styled.span`
  font-size: 16px;
  font-family: var(--font-family);
  color: #555;
`;

export default CheckboxDemo;
