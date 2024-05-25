import React from 'react';
import {Text} from 'react-native';
import {num} from './Component1';

export const num2 = 22;

const Component2 = () => {
  return <Text>Component2 + {num + 1}</Text>;
};

export const ExtraComponent = () => {
  return <Text>Exported Component</Text>;
};

export default Component2;
