import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { KEY, DARK_GRAY } from '../../../../constants';

const Primary = ({
    title, 
    onPress,
    style
}) => {
    return (
        <TouchableOpacity style={ [styles.primary, style] } onPress={ onPress }>
            <Text style={ styles.title }>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primary: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 50,
        backgroundColor: KEY,
        alignItems: 'center',
        marginBottom: 12
    },
    title: {
        fontWeight: 'bold',
        color: DARK_GRAY,
        textTransform: 'capitalize'
    }
});

export default Primary;