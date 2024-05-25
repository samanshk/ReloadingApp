import React from 'react';
import {Text} from 'react-native';

import {size} from './Base';

export const num = 11;

const GreatGrandChild = () => {
  return <Text style={{fontSize: size + 2}}>GreatGrandChild</Text>;
};

export default GreatGrandChild;
