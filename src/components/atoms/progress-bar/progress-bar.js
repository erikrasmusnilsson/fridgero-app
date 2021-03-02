import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MEDIUM_LIGHT_GRAY, KEY } from '../../../constants';

const ProgressBar = ({ progress }) => {
    return (
        <View style={ styles.progressBar }>
            <View style={ [styles.progress, { width: `${progress}%` }] }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar: {
        backgroundColor: MEDIUM_LIGHT_GRAY,
        maxHeight: 8,
        height: 8,
        position: 'relative',
        borderRadius: 50,
        overflow: 'hidden'
    },
    progress: {
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: KEY
    }
})

export default ProgressBar;