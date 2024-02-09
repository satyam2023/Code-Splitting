/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Splitter from './src/views/Splitter/Splitter';
import FirstView from './src/views/FirstView/FirstView';
import SecondView from './src/views/SecondView/SecondView';




function App(): React.JSX.Element {
 

  return (
    <SafeAreaView>
       <Splitter/>
    </SafeAreaView>
  );
}



export default App;
