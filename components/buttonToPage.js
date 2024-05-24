import * as React from 'react';
import { Button } from 'react-native-paper';

const MyComponent = (props) => (
  <Button icon={{uri: 'https://img.icons8.com/?size=100&id=vsC4kvMXFrjz&format=png&color=000000'}} mode="contained" onPress={() => navigation.navigate(props.page)}>
    Próximo
  </Button>
);

export default MyComponent;