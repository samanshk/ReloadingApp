import React from 'react';
import {Text} from 'react-native';
// import ComponentC2 from '../groupC/ComponentC2';
import {ComponentC2} from '../groupC';

export const randomVariable = 'random';

const ComponentA2 = () => {
  return (
    <>
      <Text>ComponentA2</Text>
      <ComponentC2 />
    </>
  );
};

export default ComponentA2;
