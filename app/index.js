// pages/index.js
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from 'expo-router';
import React from 'react';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.viewf}>
      <ImageBackground style={styles.imagebg} source={require('../assets/images/Filandus/logo.png')}></ImageBackground>
      <Text style={{fontSize: '2.5em'}} onPress={() => navigation.navigate('about')}>Proximo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imagebg: {
    width: width < height ? '100%' : '80%',
    height: width < height ? '50%' : '80%',
  },
  viewf: {
    backgroundColor: '#85B997',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
});

export default Home;
