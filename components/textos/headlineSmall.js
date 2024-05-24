import * as React from 'react';
import { Text } from 'react-native-paper';

const MyComponent = (props) => (
  <>
    <Text style={{flex: 1, textAlign: 'center',}} variant="headlineSmall">{props.content}</Text>
 </>
);

export default MyComponent;