import React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { DARK_GRAY, KEY, MEDIUM_LIGHT_GRAY } from '../../../constants';

const CustomSlider = ({ value, onValueChange }) => {
    return (
        <View style={ styles.wrapper }>
            <Slider 
                style={ styles.slider }
                value={ value }
                onValueChange={ onValueChange }
                maximumValue={100}
                step={10}
            />
            <View style={ styles.sliderRepresentation }>
                <View style={ [styles.progress, { width: `${value}%` }] }></View>
            </View>
            <View style={ [styles.thumb, { left: `${value}%` }] }></View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative'
    },
    slider: {
        opacity: 0
    },
    sliderRepresentation: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: MEDIUM_LIGHT_GRAY,
        width: '100%',
        height: 8,
        borderRadius: 50,
        overflow: 'hidden'
    },
    progress: {
        backgroundColor: KEY,
        height: '100%'
    },
    thumb: {
        position: 'absolute',
        top: 0,
        height: 8,
        width: 8,
        backgroundColor: DARK_GRAY
    }
});

export default CustomSlider;