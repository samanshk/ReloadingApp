import React from 'react';
import {Text} from 'react-native';
import {ComponentB2} from '../groupB';

export const sum = (a: number, b: number) => a + b;

const ComponentC1 = () => {
  return (
    <>
      <Text>ComponentC1</Text>
      <ComponentB2 />
    </>
  );
};

export default ComponentC1;
