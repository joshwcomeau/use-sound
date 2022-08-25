import React from 'react';
import Wrapper from './helpers/Wrapper';

import { StoryFn } from '@storybook/react';

import CheckboxDemo from './demos/Checkbox';
import SimpleDemo from './demos/Simple';
import HoverDemo from './demos/Hover';
import RisingDemo from './demos/Rising';
import DrumMachineDemo from './demos/DrumMachine';
import MultipleSourcesDemo from './demos/SimpleMultipleSources';
import ShowWhilePlayingDemo from './demos/ShowWhilePlaying';

import 'focus-visible';

export default {
  title: 'useSound',
  decorators: [storyFn => <Wrapper>{storyFn()}</Wrapper>],
};

export const Simple: StoryFn = () => {
  return <SimpleDemo />;
};
Simple.storyName = 'Default';

export const Checkbox: StoryFn = () => (
  <div style={{ display: 'flex', width: 160, justifyContent: 'space-between' }}>
    <CheckboxDemo />
  </div>
);
Checkbox.storyName = 'Checkbox';

export const Hovering: StoryFn = () => {
  return <HoverDemo />;
};
Hovering.storyName = 'Play when hovering';

export const Rising: StoryFn = () => {
  return <RisingDemo />;
};
Rising.storyName = 'Rising pitch';

export const DrumMachine: StoryFn = () => {
  return <DrumMachineDemo />;
};
DrumMachine.storyName = 'Drum machine (sprites)';

export const MultipleSources: StoryFn = ({ order }) => {
  return <MultipleSourcesDemo order={order} />;
};
MultipleSources.storyName = 'Multiple sources support';
MultipleSources.args = {
  order: 'wav_mp3',
};
MultipleSources.argTypes = {
  order: {
    name: 'Source',
    control: {
      type: 'radio',
      options: {
        'wav/mp3': 'wav_mp3',
        'mp3/wav': 'mp3_wav',
      },
    },
  },
};

export const ShowWhilePlaying = () => {
  return <ShowWhilePlayingDemo />;
};
ShowWhilePlaying.storyName = 'With Howler events (show while playing)';
