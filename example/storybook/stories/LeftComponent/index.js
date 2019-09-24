import React from 'react';
import PropTypes from 'prop-types';
import { Left } from 'react-native-component-separator';

export default function LeftComponent(props) {
  return <Left />
}

MainComponent.defaultProps = {
  children: null,
};

MainComponent.propTypes = {
  children: PropTypes.node,
};
