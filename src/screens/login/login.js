import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MEDIUM_GRAY } from '../../constants';

import TextInput from '../../components/atoms/text-input';
import PrimaryButton from '../../components/atoms/buttons/primary';
import SecondaryButton from '../../components/atoms/buttons/secondary';

const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onLogin = () => {
        if (username === "rasmus" && password === "password") {
            console.log("logged in");
        }
    }

    return (
        <View style={ styles.login }>
            <TextInput 
                placeholder="Username"
                value={ username }
                onChangeText={ setUsername }
                autoCapitalize='none'
            />
            <TextInput 
                placeholder="Password"
                value={ password }
                onChangeText={ setPassword }
                autoCapitalize='none'
                hideContent
            />
            <View style={ styles.buttons }>
                <SecondaryButton title="Sign up" style={{ marginRight: 12 }}/>
                <PrimaryButton title="Log in" onPress={ onLogin }/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: MEDIUM_GRAY,
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});

export default Login;