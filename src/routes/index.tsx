import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackProps } from './index.d';
import { Header } from '../components/Header';

import HomeScreen from '../screens/home';
import CartScreen from '../screens/cart';

const { Navigator, Screen } = createNativeStackNavigator<StackProps>();

function Routes() {
  return (
      <Navigator screenOptions={{
        header:()=> <Header/>
      }}>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Cart" component={CartScreen} />
      </Navigator>
  );
}

export { Routes };