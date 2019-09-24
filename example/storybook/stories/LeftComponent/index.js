import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import { Left } from 'react-native-component-separator'

export default function LeftComponent(props) {
  return (
    <View style={styles.container}>
      <Left>Example</Left>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    paddingHorizontal: 24
  }
})

LeftComponent.defaultProps = {
  children: null
};

LeftComponent.propTypes = {
  children: PropTypes.node
};
