import React from 'react';

import { storiesOf } from '@storybook/react-native';

import LeftComponent from './LeftComponent';

storiesOf('Left component - React Native Component Separator', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <LeftComponent />);
