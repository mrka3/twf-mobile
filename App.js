import * as React from 'react';
import { View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TwfNavigationBar from './components/TwfNavigationBar';
import TopBar from './components/TopBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <TopBar></TopBar>
        <NavigationContainer>
        <TwfNavigationBar></TwfNavigationBar>
     </NavigationContainer>
     </View>
    );
  }
}