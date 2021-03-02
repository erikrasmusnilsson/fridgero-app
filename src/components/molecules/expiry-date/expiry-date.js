import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DatePicker from '../date-picker';
import PrimaryButton from '../../atoms/buttons/primary';

const ExpiryDate = ({
    value,
    onChangeDate,
    onRequestEditDate,
    isEditingDate
}) => {
    const formatDate = date => {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }

    return (
        <View style={ styles.expiryDate }>
            <View style={ styles.editDateButton }>
                <PrimaryButton title={ formatDate(value) } onPress={ onRequestEditDate } />
            </View>
            {
                isEditingDate ? (
                    <DatePicker 
                        value={ value } 
                        onChange={ onChangeDate } 
                        minDate={ new Date() }
                    />
                ) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    expiryDate: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    editDateButton: {
        flex: 1,
        alignItems: 'flex-end'
    }
});

export default ExpiryDate;