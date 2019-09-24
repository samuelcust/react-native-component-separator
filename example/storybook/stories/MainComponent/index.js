import React from 'react';
import PropTypes from 'prop-types';
import { Left } from 'react-native-component-separator';

export default function MainComponent(props) {
  return <Left />
}

MainComponent.defaultProps = {
  children: null,
};

MainComponent.propTypes = {
  children: PropTypes.node,
};
