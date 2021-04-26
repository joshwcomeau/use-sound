import React from 'react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import Wrapper from './helpers/Wrapper';

import CheckboxDemo from './demos/Checkbox';
import SimpleDemo from './demos/Simple';
import HoverDemo from './demos/Hover';
import RisingDemo from './demos/Rising';
import DrumMachineDemo from './demos/DrumMachine';
import MultipleSourcesDemo from './demos/SimpleMultipleSources';

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

export const MultipleSources = () => {
  const options = {
    'wav/mp3': 'wav_mp3',
    'mp3/wav': 'mp3_wav'
  };
  const value = radios('Source', options, 'wav_mp3', 'group1');
  return <MultipleSourcesDemo order={value}/>;
};

MultipleSources.story = {
  name: 'Multiple sources support',
};
