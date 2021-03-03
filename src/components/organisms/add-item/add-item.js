import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LIGHT_GRAY, MEDIUM_GRAY } from '../../../constants';

import TextInput from '../../atoms/text-input';
import Slider from '../../atoms/slider';
import ExpiryDate from '../../molecules/expiry-date';
import SecondaryButton from '../../atoms/buttons/secondary';

const AddItem = ({
    name, 
    setName,
    capacity,
    setCapacity,
    expiryDate,
    setExpiryDate,
    isEditingExpiryDate,
    onRequestEditExpiryDate,
    onSave
}) => {
    return (
        <View style={ styles.addItem }>
            <Text style={ styles.title }>Add Item</Text>
            <TextInput placeholder="Name" value={ name } onChangeText={ setName } />
            <Text style={ styles.capacityLabel }>Capacity: {capacity}%</Text>
            <Slider value={ capacity } onValueChange={ setCapacity } />
            <ExpiryDate
                value={ expiryDate }
                onChangeDate={ (_, date) => setExpiryDate(date) }
                onRequestEditDate={ onRequestEditExpiryDate }
                isEditingDate={ isEditingExpiryDate }
            />
            <SecondaryButton title='Save' onPress={ onSave }/>
        </View>
    )
}

const styles = StyleSheet.create({
    addItem: {
        flexBasis: 350,
        backgroundColor: MEDIUM_GRAY,
        padding: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        color: LIGHT_GRAY,
        fontWeight: 'bold',
        marginBottom: 12,
        marginLeft: 12
    },
    capacityLabel: {
        color: LIGHT_GRAY,
        marginBottom: 8,
        marginLeft: 2
    }
});

export default AddItem;