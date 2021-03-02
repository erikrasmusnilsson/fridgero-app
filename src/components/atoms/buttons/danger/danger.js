import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LIGHT_GRAY } from '../../../../constants';

const Danger = ({
    title, 
    onPress,
    style
}) => {
    return (
        <TouchableOpacity style={ [styles.danger, style] } onPress={ onPress }>
            <Text style={ styles.title }>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    danger: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 50,
        backgroundColor: "#c0392b",
        alignItems: 'center',
        marginBottom: 12
    },
    title: {
        fontWeight: 'bold',
        color: LIGHT_GRAY,
        textTransform: 'capitalize'
    }
});

export default Danger;