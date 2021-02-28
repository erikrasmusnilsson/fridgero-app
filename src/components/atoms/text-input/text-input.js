import React from 'react';
import * as ReactNative from 'react-native';
import { LIGHT_GRAY, MEDIUM_GRAY } from '../../../constants';

const TextInput = ({
    placeholder,
    onChangeText,
    value,
    autoCapitalize,
    hideContent
}) => {
    return (
        <ReactNative.TextInput 
            placeholder={ placeholder }
            onChangeText={ onChangeText }
            value={ value }
            style={ styles.textInput }
            autoCapitalize={ autoCapitalize }
            secureTextEntry={ hideContent }
        />
    )
}

const styles = ReactNative.StyleSheet.create({
    textInput: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 50,
        backgroundColor: LIGHT_GRAY,
        color: MEDIUM_GRAY,
        marginBottom: 12 
    }
})

export default TextInput;