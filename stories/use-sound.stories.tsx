import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Wrapper from './helpers/Wrapper';

import CheckboxDemo from './demos/Checkbox';
import SimpleDemo from './demos/Simple';
import HoverDemo from './demos/Hover';
import RisingDemo from './demos/Rising';
import DrumMachineDemo from './demos/DrumMachine';

import 'focus-visible';

export default {
  title: 'useSound',
  decorators: [withKnobs, storyFn => <Wrapper>{storyFn()}</Wrapper>],
};

export const Simple = () => {
  return <SimpleDemo />;
};

Simple.story = {
  name: 'Default',
};

export const Checkbox = () => (
  <div style={{ display: 'flex', width: 160, justifyContent: 'space-between' }}>
    <CheckboxDemo />
    <CheckboxDemo />
    <CheckboxDemo />
  </div>
);

Checkbox.story = {
  name: 'Checkbox',
};

export const Hovering = () => {
  return <HoverDemo />;
};

Hovering.story = {
  name: 'Play when hovering',
};

export const Rising = () => {
  return <RisingDemo />;
};

Rising.story = {
  name: 'Rising pitch',
};

export const DrumMachine = () => {
  return <DrumMachineDemo />;
};

DrumMachine.story = {
  name: 'Drum machine (sprites)',
};
