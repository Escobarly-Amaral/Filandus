import * as React from 'react';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';


const MyComponent = (props) => (
  <>
    <Text style={{flex: 1, textAlign: 'center',}} variant="labelLarge">{props.content}</Text>
 </>
);

export default MyComponent;