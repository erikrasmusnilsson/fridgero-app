import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/login';
import PanelScreen from './src/screens/panel';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Panel">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={ LoginScreen } />
        <Stack.Screen options={{ headerShown: false }} name="Panel" component={ PanelScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;