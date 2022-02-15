/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//@ts-ignore
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Intro from './app/screens/intro';
const App: () => Node = () => {
  return <Intro />;
};

export default App;
