import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MEDIUM_GRAY, LIGHT_GRAY } from '../../../constants';

import ProgressBar from '../../atoms/progress-bar';
import SecondaryButton from '../../atoms/buttons/secondary';
import DangerButton from '../../atoms/buttons/danger';
import ExpiryDate from '../../molecules/expiry-date';

const EditItem = ({
    item,
    onChangeExpiryDate,
    onRequestEditExpiryDate,
    isEditingExpiryDate,
    onDeleteItem
}) => {
    const { id, title, capacity, expiryDate } = item;

    return (
        <View style={ styles.editItem }>
            <View style={ styles.header }>
                <Text style={ styles.title }>{ title }</Text>
                <Text style={ styles.capacity }>Capacity: { capacity }%</Text>
                <ProgressBar progress={ capacity } />
                <ExpiryDate
                    value={ expiryDate }
                    onChangeDate={ (_, date) => onChangeExpiryDate(id, date) }
                    onRequestEditDate={ onRequestEditExpiryDate }
                    isEditingDate={ isEditingExpiryDate }
                />
            </View>
            <View style={ styles.buttonWrapper }>
                <DangerButton title="Delete" onPress={ () => onDeleteItem(id) } />
                <SecondaryButton title="Save" style={{ marginLeft: 12 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    editItem: {
        flexBasis: 300,
        backgroundColor: MEDIUM_GRAY,
        padding: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        justifyContent: 'space-between'
    },
    header: {
        flex: 1
    },  
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: LIGHT_GRAY,
        marginBottom: 12
    },
    capacity: {
        color: LIGHT_GRAY,
        marginBottom: 6
    },
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: 'flex-end'
    }
});

export default EditItem;