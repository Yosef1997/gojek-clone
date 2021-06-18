import React from 'react';
// import { View, Text } from 'react-native';
import Promo from '../screens/promo';
import Beranda from '../screens/beranda';
import Chat from '../screens/chat';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const bottomNavigatior = () => {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Promo"
        component={Promo}
        options={{ tabBarLabel: 'Promo' }}
      />
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{ tabBarLabel: 'Beranda' }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{ tabBarLabel: 'Chat' }}
      />
    </Tab.Navigator>
  );
};

export default bottomNavigatior;
