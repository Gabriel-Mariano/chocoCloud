import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Text } from 'react-native';
import { COLORS } from '../../themes/colors';

import Icon from 'react-native-vector-icons/Ionicons';

import Stack from '../customStack';
import FavoritesScreen from '../../screens/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs = () => {
    return (
      <Navigator
          screenOptions={{ 
              headerShown:false,
              tabBarActiveTintColor:COLORS.primary,
              tabBarInactiveTintColor:COLORS.placeholder,
              tabBarStyle:{ 
                  backgroundColor:COLORS.secondary,
                  height:Platform.OS === 'android'? 60 : 70,
                  alignItems:'center'
              },
          }}
          >
              <Screen 
                  name="Initial" 
                  component={Stack} 
                  options={{
                      tabBarIcon:({color})=> (
                          <Icon name="home" size={20} color={color} />
                      ),
                      tabBarLabel: ({focused}) => (
                          <Text style={[
                              { marginBottom:8 }, 
                              { color: focused ? COLORS.primary : COLORS.placeholder }
                          ]}>
                              Home
                          </Text>
                      )
                   }}
              />
  
              <Screen 
                  name="Favorites" 
                  component={FavoritesScreen}
                  options={{
                      tabBarIcon:({color})=> (
                          <Icon name="heart" size={20} color={color}  />
                      ),
                      tabBarLabel: ({ focused }) =>(
                          <Text style={[
                              { marginBottom:8 }, 
                              { color: focused ? COLORS.primary : COLORS.placeholder }
                          ]}>
                              Favoritos
                          </Text>
                      ) 
                    }}    
              />
          </Navigator>  
    );
  }

  export default Tabs;