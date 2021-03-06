import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../Screens/Welcome';
import Home from '../Screens/Home';
import Details from '../Screens/Details';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />

    </Stack.Navigator>
  );
};

export default Routes;