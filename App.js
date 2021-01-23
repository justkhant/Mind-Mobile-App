import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './screens/Home';
import Sleep from './screens/Sleep';
import Meditation from './screens/Meditation';
import Library from './screens/Library';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#FE9179',
          inactiveTintColor: '#4B4B4B',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Icon name="crop-square" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Sleep"
          component={Sleep}
          options={{
            tabBarLabel: 'Sleep',
            tabBarIcon: ({color, size}) => (
              <Icon
                name="checkbox-blank-circle-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Meditation"
          component={Meditation}
          options={{
            tabBarLabel: 'Meditation',
            tabBarIcon: ({color, size}) => (
              <Icon name="gesture" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({color, size}) => (
              <Icon name="bookmark-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
