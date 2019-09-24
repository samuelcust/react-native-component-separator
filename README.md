# react-native-component-separator
A separator component for React Native

![left-component](https://raw.githubusercontent.com/samuelcust/react-native-component-separator/master/example/images/left-component.png)

## Install

```shell
yarn add react-native-component-separator

# or

npm install react-native-component-separator --save
```

## Usage

```javascript
import { Left } from 'react-native-component-separator';

<Left borderColor="#e0e0e0" color="#616161">Example</Left>;
```

## Props

| Prop          | Type                          | default           | Description                                                    |
| ------------- | ----------------------------- | ----------------- | -------------------------------------------------------------- |
| `borderColor` | String                        | `#e0e0e0`         | line color                                                     |
| `color`       | String                        | `#616161`         | font color                                                     |

### How to start developing?

1. `cd example`
2. `yarn install`
3. `npm link ../`
4. `yarn run storybook`
5. `react-native run-android`
