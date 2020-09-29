import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { THEME } from '../theme';

import { MainScreen } from '../screens/MainScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { Figure1Screen } from '../screens/Figure1';
import { Figure2Screen } from '../screens/Figure2';
import { Figure3Screen } from '../screens/Figure3';


const Stack = createStackNavigator()

function RootStack() {

  return (
    <Stack.Navigator
      initialRouteName="Main"
      //screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ 
          title: 'Расчет площади фигур',
          headerStyle: {
            backgroundColor: THEME.HEADER_BACKGROUND
        },  }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ 
          title: 'О программе',
          headerStyle: {
            backgroundColor: THEME.HEADER_BACKGROUND
        },  }}
      />
      <Stack.Screen
        name="Figure1"
        component={Figure1Screen}
        options={{ 
          title: 'Площадь квадрата',
          headerStyle: {
            backgroundColor: THEME.HEADER_BACKGROUND
        },  }}
      />
      <Stack.Screen
        name="Figure2"
        component={Figure2Screen}
        options={{ 
          title: 'Площадь прямоугольника',
          headerStyle: {
            backgroundColor: THEME.HEADER_BACKGROUND
        },  }}
      />
      <Stack.Screen
        name="Figure3"
        component={Figure3Screen}
        options={{ 
          title: 'Площадь круга',
          headerStyle: {
            backgroundColor: THEME.HEADER_BACKGROUND
        },  }}
      />
      
    </Stack.Navigator>
  );
}

export const AppNavigation = () => {
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    )}


    