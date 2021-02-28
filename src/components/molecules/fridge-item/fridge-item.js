import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LIGHT_GRAY, MEDIUM_GRAY } from '../../../constants';

import ProgressBar from '../../atoms/progress-bar';

const FridgeItem = ({ 
    title, 
    capacity,
    onPress
}) => {
    return (
        <TouchableOpacity style={ styles.fridgeItem } onPress={ onPress }>
            <Text style={ styles.title }>{ title }</Text>
            <ProgressBar progress={ capacity } />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fridgeItem: {
        backgroundColor: LIGHT_GRAY,
        borderRadius: 50,
        paddingHorizontal: 24,
        paddingVertical: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
        alignItems: 'center',
    },
    title: {
        flexBasis: '50%',
        color: MEDIUM_GRAY,
        marginRight: 12
    }
});

export default FridgeItem;