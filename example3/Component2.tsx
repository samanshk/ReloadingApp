import React from 'react';
import {Text} from 'react-native';
import {Component1} from '.';

export const addFive = (num: number) => {
  return num + 5;
};

const Component2 = () => {
  return (
    <>
      <Text>Component2</Text>
      <Component1 />
    </>
  );
};

export default Component2;
