import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import Tab from './tab.routes';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} options={{title: "Sign in",headerTitleAlign: 'center'}}/>
      <Stack.Screen name="Tabs" component={Tab} options={{title: "Tabs",headerTitleAlign: 'center'}} />
    </Stack.Navigator>
  );
}