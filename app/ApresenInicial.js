import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useNavigation } from 'expo-router';
import React from 'react';
import BtnPage from '../components/buttonToPage.js';

const { width, height } = Dimensions.get('window');

const ApresenInicial = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.viewf}>
      <View style={styles.Ellipse27}>
        <Text style={{fontSize: '2.5em', color: '#ffffff', fontWeight: 'bold',}}>Bem-vindo(a)</Text>
        <Text style={{fontSize: '2.5em', color: '#ffffff', marginBottom: '10%', fontWeight: 'bold',}}>ao Filandus!</Text>
      </View>
      <ImageBackground style={styles.image} source={require('../assets/images/Filandus/2.png')}></ImageBackground>
      <Text style={{fontSize: '1.8em', color: '#ffffff', fontWeight: '500', position: 'absolute', marginTop: '9em', textAlign: 'center',}}>Para ter acesso ao aplicativo, peça o email e a senha para seu (sua) PDT.</Text>
      <BtnPage page="/page1"/>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: '30%',
    width: '80vw',
    height: '55%',
  },
  imagebg: {
    width: '100%',
    height: '50%'
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
  }
});

export default ApresenInicial;