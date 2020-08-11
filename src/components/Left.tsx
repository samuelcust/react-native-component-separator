import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  color?: string;
  borderColor?: string;
};

const defaultProps: Props = {
  color: '#616161',
  borderColor: '#e0e0e0'
};

const Left: React.SFC<Props> = props => {
  return (
    <View style={ styles.container }>
      <Text style={{ ...styles.text, color: props.color }}>
        { props.children }
      </Text>
      <View style={{ ...styles.line, borderColor: props.borderColor }} />
    </View>
  );
};

Left.defaultProps = defaultProps;

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
});

export default Left;
