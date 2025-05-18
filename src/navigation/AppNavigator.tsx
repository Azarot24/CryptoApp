import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CryptoListScreen } from '../screens/CryptoListScreen';
import { CryptoDetailScreen } from '../screens/CryptoDetailScreen';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CryptoListScreen} />
      <Stack.Screen name="Detail" component={CryptoDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);