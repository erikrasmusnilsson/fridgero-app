import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { DARK_GRAY, LIGHT_GRAY } from '../../../../constants';

const Secondary = ({
    title,
    onPress,
    style
}) => {
    return (
        <TouchableOpacity style={ [styles.secondary, style] } onPress={ onPress }>
            <Text style={ styles.title }>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    secondary: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 50,
        backgroundColor: DARK_GRAY,
        alignItems: 'center',
        marginBottom: 12
    },
    title: {
        color: LIGHT_GRAY,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
})

export default Secondary;