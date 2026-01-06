/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import MainNavigation from './src/navigations/mainNavigation'
import { Provider } from 'react-redux';
import {store} from './src/store/store'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import './src/i18n/i18n';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{flex:1}}>
 <Provider store={store}>
   <SafeAreaProvider>
    <SafeAreaView/>
   <MainNavigation/>
    </SafeAreaProvider>
    </Provider>
    </GestureHandlerRootView>
   
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
