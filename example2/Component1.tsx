import React from 'react';
import {Text} from 'react-native';
import {ExtraComponent} from './Component2';

export const num = 12;

const Component1 = () => {
  return (
    <>
      <Text>Component1 + {num}</Text>
      <ExtraComponent />
    </>
  );
};

export default Component1;
