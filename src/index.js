import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AwesomeIcon from '@expo/vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home/index';
import HistoryScreen from './screens/history/index';
import MapScreen from './screens/maps/index';

const Tab = createBottomTabNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color: clr }) => <AwesomeIcon name="home" color={clr} size={16} />,
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color: clr }) => <AwesomeIcon name="map" color={clr} size={16} />,
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ color: clr }) => <AwesomeIcon name="history" color={clr} size={16} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Index;
