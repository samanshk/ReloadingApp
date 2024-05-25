import React from 'react';
import {Text} from 'react-native';
import {ComponentA1} from '../groupA';

export const num = 43;

const ComponentB1 = () => {
  return (
    <>
      <Text>ComponentB1</Text>
      <ComponentA1 />
    </>
  );
};

export default ComponentB1;
