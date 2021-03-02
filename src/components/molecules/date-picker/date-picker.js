import React from 'react';
import { View, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({
    value,
    onChange,
    minDate
}) => {
    return (
        <View style={ styles.datePickerWrapper }>
            <DateTimePicker 
                mode="date"
                display="calendar"
                value={ value }
                chosenDate={ value }
                onChange={ onChange }
                minimumDate={ minDate }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    datePickerWrapper: {
        position: 'relative',
        zIndex: 1500
    }
})

export default DatePicker;