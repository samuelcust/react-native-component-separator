import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import PropTypes from 'prop-types'

class Left extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {
    color: PropTypes.string,
    borderColor: PropTypes.string
  }

  static defaultProps = {
    color: '#616161',
    borderColor: '#e0e0e0'
  }

  render () {
    const props = this.props
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { color: props.color }]}>{props.children}</Text>
        <View
          style={[
            styles.line,
            { borderColor: props.borderColor }
          ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 24,
    flexDirection: 'row',
    alignItems: 'center'
  },
  line: {
    flex: 1,
    height: 24,
    borderBottomWidth: 1,
    transform: [{ translateY: -10 }]
  },
  text: {
    paddingRight: 12,
    fontSize: 14,
    fontWeight: '400'
  }
})

export default Left
