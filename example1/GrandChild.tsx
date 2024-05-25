import React from 'react';
import {Text} from 'react-native';
import GreatGrandChild from './GreatGrandChild';

// export const num = 11;

const GrandChild = () => {
  return (
    <>
      <Text>GrandChild</Text>
      <GreatGrandChild />
    </>
  );
};

export default GrandChild;
