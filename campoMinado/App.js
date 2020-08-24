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
import Flag from './src/components/Flag';
import MineField from './src/components/MineField';
import { createMinedBoard } from './src/functions';
import params from './src/params';

export default class App extends Component {

  constructor(...props) {
    super(...props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    
    return{
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }

  render(){
    return(
    <View style={styles.container}>
      <Text>Iniciando O Jogo</Text>
      <Text>Tamanho da grade: {
            params.getRowsAmount() +"x"+ params.getColumnsAmount()}</Text>
      <View style={styles.board}>
        <MineField board={this.state.board} />
      </View>
    </View>
    )};
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  },
  board: {
    // alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
