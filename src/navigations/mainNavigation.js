import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import myTabs from './bottomNavigation'

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="myTabs" component={myTabs} />
    </Stack.Navigator>
  );
}




export default function MainNavigation() {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  )
}