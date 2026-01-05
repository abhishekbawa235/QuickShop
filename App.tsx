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
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import MainNavigation from './src/navigations/mainNavigation'
import { Provider } from 'react-redux';
import {store} from './src/store/store'
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
   <SafeAreaProvider>
   <MainNavigation/>
    </SafeAreaProvider>
    </Provider>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
