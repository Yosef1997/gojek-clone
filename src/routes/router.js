import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './bottomNavigatior';

const Stack = createStackNavigator();

const router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
      component={BottomTabs}
      options={{headerShown: false}}
      name="BottomTabs"
      />
    </Stack.Navigator>
  );
};

export default router;
