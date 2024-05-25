import React from 'react';
import {Text} from 'react-native';

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const Child2 = () => {
  return <Text>Child22</Text>;
};

export default Child2;
