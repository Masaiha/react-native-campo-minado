import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import bandeira from '../../wwwroot/imagens/bandeira.png';

export default props => {
    return (
        <View>
            <Image source={bandeira} 
                   style={[styles.img, props.bigger ? styles.imgBigger : null]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 20,
        height: 20,
    },
    imgBigger: {
        width: 30,
        height: 30,
    }
})