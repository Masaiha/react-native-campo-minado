import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';
import params from '../params';

export default props => {
if(props.isVisible)
return (
    <Modal
        onRequestClose={props.onCancel}
        visible={true}
        animationType='slide'
        transparent={true}>
        <View style={styles.containerTitle}>
            <TouchableOpacity onPress={() => props.onCancelFeedback(false)}>
            <Text style={styles.title}>x</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.frame}>
            <View style={[styles.container, styles.label]}>
            {props.lost? <Text style={[styles.label, styles.labelLost]}> Opss!! Não foi dessa vez, Você Perdeu !! </Text> :
                         <Text style={styles.label}> Parabéns, Você Ganhou !!</Text>}
            </View>
        </View>
    </Modal>
)

return false;
}

const styles = StyleSheet.create({
    containerTitle:{
        // flex: 1,
        // flexDirection: 'row',
        height: 40,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // backgroundColor: 'red',
        padding: 5

    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    frame:{
        // flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container:{
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        width: params.getRowsAmount()*100,
        height: params.getColumnsAmount()*10
        
    },
    label: {
        fontSize: 25,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        fontWeight: 'bold'
    },
    labelLost: {
        color: 'red'
    }
})