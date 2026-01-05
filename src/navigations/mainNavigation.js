import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import myTabs from './bottomNavigation'


const RootStack = createNativeStackNavigator({
  screens: {
    myTabs: myTabs,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function MainNavigation() {
  return <Navigation />;
}