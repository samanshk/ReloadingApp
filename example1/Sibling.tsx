import React from 'react';
import {Text} from 'react-native';

import {size} from './Base';

export const color = 'red';

const Sibling = () => {
  return <Text style={{fontSize: size + 1}}>Sibling</Text>;
};

export default Sibling;
