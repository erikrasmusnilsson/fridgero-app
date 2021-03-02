import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { LIGHT_GRAY, MEDIUM_GRAY } from '../../../constants';

import ProgressBar from '../../atoms/progress-bar';

const FridgeItem = ({ 
    item,
    onPress
}) => {
    const { title, capacity } = item;
    return (
        <TouchableOpacity style={ styles.fridgeItem } onPress={ () => onPress(item) }>
            <Text style={ styles.title }>{ title }</Text>
            <View style={ styles.progressBarWrapper }>
                <ProgressBar progress={ capacity } />
            </View>
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
    },
    progressBarWrapper: {
        flex: 1
    }
});

export default FridgeItem;