import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { InitalRouteProps, StackProps } from './types';
import { Header } from '../components/Header';

import MyTabs from './customTabs';

const { Navigator, Screen } = createNativeStackNavigator<InitalRouteProps>();

function Routes() {
  return (
      <Navigator screenOptions={{
        headerShown:false
      }}>
        <Screen name="Tabs" component={MyTabs} />
      </Navigator>
  );
}

export { Routes };