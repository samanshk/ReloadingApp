import React from 'react';
import {Text} from 'react-native';
import GrandChild from './GrandChild';

export const num = 11;

const Child1 = () => {
  return (
    <>
      <Text>Child1</Text>
      <GrandChild />
    </>
  );
};

export default Child1;
