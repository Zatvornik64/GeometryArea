import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { THEME } from '../theme';

import { MainScreen } from '../screens/MainScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { FigureScreen }  from '../screens/FigureScreen';


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
        name="Figure"
        component={FigureScreen}
        options={{ 
          title: 'Расчет',
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


    