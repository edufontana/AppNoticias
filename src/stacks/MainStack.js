import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListaNoticias from '../screens/ListaNoticias';
import EditarNoticias from '../screens/EditarNoticias';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#fff',
    }}>
    <MainStack.Screen name="ListaNoticias" component={ListaNoticias} />
    <MainStack.Screen name="EditarNoticias" component={EditarNoticias} />
  </MainStack.Navigator>
);
