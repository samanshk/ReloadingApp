import React from 'react';
import {Text} from 'react-native';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

export const size = 15;

const Base = () => {
  return (
    <>
      <Text>Base</Text>
      <Child1 />
      <Child2 />
      <Child3 />
    </>
  );
};

export default Base;
