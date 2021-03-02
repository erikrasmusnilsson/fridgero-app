import React from 'react';
import Slider from '@react-native-community/slider';
import { KEY, DARK_GRAY } from '../../../constants';

const CustomSlider = ({ value, onValueChange }) => {
    return (
        <Slider 
            minimumTrackTintColor={ KEY }
            maximumTrackTintColor={ DARK_GRAY }
            thumbTintColor={ DARK_GRAY }
            value={ value }
            onValueChange={ onValueChange }
            maximumValue={100}
            step={10}
        />
    )
}

export default CustomSlider;