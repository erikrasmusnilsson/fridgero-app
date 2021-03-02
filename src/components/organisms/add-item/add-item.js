import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MEDIUM_GRAY } from '../../../constants';

import TextInput from '../../atoms/text-input';
import Slider from '../../atoms/slider';
import ExpiryDate from '../../molecules/expiry-date';

const AddItem = ({
    name, 
    setName,
    capacity,
    setCapacity,
    expiryDate,
    setExpiryDate
}) => {
    return (
        <View style={ styles.addItem }>
            <TextInput placeholder="Name" value={ name } onChangeText={ setName } />
            <Slider value={ capacity } onValueChange={ setCapacity } />
            <ExpiryDate
                value={ expiryDate }
                onChangeDate={ setExpiryDate }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    addItem: {
        flexBasis: 300,
        backgroundColor: MEDIUM_GRAY,
        padding: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        justifyContent: 'space-between'
    }
});

export default AddItem;