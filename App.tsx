import React from 'react';
import {StyleSheet, View} from 'react-native';
import Base from './example1/Base';
import Component1 from './example2/Component1';
import Component2 from './example2/Component2';
import Example3 from './Example3';
import Example4 from './Example4';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      {/* Example of child importing from parent */}
      <Base />

      {/* Example of sibling importing from each other */}
      <Component1 />
      <Component2 />

      {/* Example of sibling importing from index file */}
      <Example3 />

      {/* Example of importing from index files */}
      <Example4 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
