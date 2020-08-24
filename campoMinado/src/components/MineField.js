import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import Field from './Field';

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} />
        })
        return <SafeAreaView style={{flexDirection: 'row'}} key={r}>{ columns }</SafeAreaView>
    })

    return <SafeAreaView style={styles.container}>{ rows }</SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        //flexDirection: 'row',
        backgroundColor: '#EEE'
    }
})