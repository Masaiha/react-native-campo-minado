import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

import MineField from './src/components/MineField';
import { createMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertFlag, flagsUsed } from './src/functions';
import params from './src/params';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';
import FeedbackFinal from './src/screens/FeedbackFinal';

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
      won: false,
      lost: false,
      showLevelSelection: false,
      showFeedback: false
    }
  }

  onOpenField =(row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board); 
    const finished = hadExplosion(board) || wonGame(board)

    if(lost) showMines(board);
    if(finished) this.setState({showFeedback: true})

    this.setState({ board, lost, won, finished })
  }

  onSelectField =(row, column) => {
    const board = this.state.board;
    invertFlag(board, row, column);
    const finished = hadExplosion(board) || wonGame(board)

    if(finished) this.setState({showFeedback: true})

    this.setState({ board, finished })
  }

  onLevelSelected = level => {
    params.difficultLevel = level;
    this.setState(this.createState())
  }

  onCancelFeedback = (showFeedback) => {
    this.setState({ showFeedback })
  }

  render(){
    return(
    <View style={styles.container}>
      <FeedbackFinal lost={this.state.lost && this.state.finished} 
                     isVisible={this.state.showFeedback} 
                     onCancel={() => this.setState({ showFeedback: false })}
                     onCancelFeedback={() => this.onCancelFeedback()}
                     />
      <LevelSelection isVisible={this.state.showLevelSelection}
                      onLevelSelected={this.onLevelSelected}
                      onCancel={() => this.setState({ showLevelSelection: false })} />
      <Header flagLeft={this.minesAmount() - flagsUsed(this.state.board)} 
              onNewGame={() => this.setState(this.createState())}
              onFlagPress={() => this.setState({ showLevelSelection: true })}/>
      <View style={styles.board}>
        <MineField board={this.state.board}
                   onOpenField={this.onOpenField} 
                   onSelectField={this.onSelectField}/>
      </View>
    </View>
    )};
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    backgroundColor: '#AAA'
  }
});
