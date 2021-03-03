import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { DARK_GRAY, LIGHT_GRAY } from '../../../../constants';

const Tertiary = ({
    title,
    onPress,
    style
}) => {
    return (
        <TouchableOpacity style={ [styles.tertiary, style] } onPress={ onPress }>
            <Text style={ styles.title }>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    tertiary: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 50,
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginBottom: 12
    },
    title: {
        color: LIGHT_GRAY,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
})

export default Tertiary;