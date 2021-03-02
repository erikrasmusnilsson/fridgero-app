import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ItemProvider } from './src/context/item-context';

import LoginScreen from './src/screens/login';
import PanelScreen from './src/screens/panel';
import ViewAllItemsScreen from './src/screens/view-all-items';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Panel">
          <Stack.Screen options={{ headerShown: false }} name="Login" component={ LoginScreen } />
          <Stack.Screen options={{ headerShown: false }} name="Panel" component={ PanelScreen } />
          <Stack.Screen options={{ headerShown: false }} name="ViewAllItems" component={ ViewAllItemsScreen } />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  )
}

export default App;