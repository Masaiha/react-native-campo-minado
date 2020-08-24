/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Field from './src/components/Field';
import params from './src/params';

export default class App extends Component {
  render(){
    return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando O Jogo</Text>
      <Text style={styles.welcome} >Tamanho da grade: {params.getRowsAmount() +"x"+ params.getColumnsAmount()}</Text>
      <Field />
      <Field opened/>
    </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },  
});
