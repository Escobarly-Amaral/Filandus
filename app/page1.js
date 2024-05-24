import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from 'expo-router';
import React from 'react';
import BtnPage from '../components/buttonToPage.js';
import Text1 from '../components/textos/displayLarge.js';
import Text2 from '../components/textos/bodyLarge.js';
import Text3 from '../components/textos/headlineLarge.js';
import Text4 from '../components/textos/headlineSmall.js';
import Text5 from '../components/textos/labelLarge.js';
import Text6 from '../components/textos/titleLarge.js';
import Text7 from '../components/textos/titleSmall.js';

const { width, height } = Dimensions.get('window');

const page1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.viewf}>
      <View style={styles.Ellipse27}>
        <Text style={{fontSize: '2.5em', color: '#ffffff', fontWeight: 'bold',}}>Bem-vindo(a)</Text>
        <Text style={{fontSize: '2.5em', color: '#ffffff', marginBottom: '10%', fontWeight: 'bold',}}>ao Filandus!</Text>
      </View>
      <ImageBackground style={styles.image} source={require('../assets/images/Filandus/3.png')}></ImageBackground>
      <Text4 content="Para ter acesso ao aplicativo, peça o email e a senha para seu (sua) PDT.A senha e email não poderão ser alterados. Cada sala terá apenas um email."/>
      <BtnPage page="/page2"/>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: '50%',
    marginBottom: '-40%',
    width: '80vw',
    height: '55%',
  },
  Ellipse27:{
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '130vw',
    height: '420px',
    left: '-15vw',
    top: '-15em',
    backgroundColor: '#AF616D',
    borderColor: '#FFFFFF',
    borderWidth: '6px',
    borderRadius: '100%',
  },

  viewf: {
    backgroundColor: '#85B997',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
});

export default page1;