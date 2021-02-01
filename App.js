import React, {useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './screens/Home';
import Sleep from './screens/Sleep';
import Meditation from './screens/Meditation';
import Library from './screens/Library';

import {Colors} from './constants/theme';

const Tab = createBottomTabNavigator();

function App() {
  const [tabBarStyle, setTabBarStyle] = useState({
    backgroundColor: Colors.HOME_NAVBAR_COLOR,
    activeTintColor: Colors.HOME_NAVBAR_TINT,
    inactiveTintColor: Colors.HOME_VECT_COLOR,
  });
  const [statusBarStyle, setStatusBarStyle] = useState('dark-content');

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle={statusBarStyle} />
      <NavigationContainer>
        <Tab.Navigator
          sceneContainerStyle={styles.sceneContainer}
          initialRouteName="Home"
          tabBarOptions={{
            labelStyle: styles.bottomNavLabel,
            tabStyle: styles.bottomNavTabItem,
            activeTintColor: tabBarStyle.activeTintColor,
            inactiveTintColor: tabBarStyle.inactiveTintColor,
            style: [
              styles.bottomNav,
              {backgroundColor: tabBarStyle.backgroundColor},
            ],
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            listeners={{
              tabPress: (e) => {
                setTabBarStyle({
                  backgroundColor: Colors.HOME_NAVBAR_COLOR,
                  activeTintColor: Colors.HOME_NAVBAR_TINT,
                  inactiveTintColor: Colors.HOME_VECT_COLOR,
                });
                setStatusBarStyle('dark-content');
              },
            }}
            options={{
              tabBarLabel: 'HOME',
              tabBarIcon: ({color, size}) => (
                <Icon name="crop-square" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Sleep"
            component={Sleep}
            listeners={{
              tabPress: (e) => {
                setTabBarStyle({
                  backgroundColor: Colors.SLEEP_NAVBAR_COLOR,
                  activeTintColor: Colors.SLEEP_NAVBAR_TINT,
                  inactiveTintColor: Colors.SLEEP_VECT_COLOR,
                });
                setStatusBarStyle('light-content');
              },
            }}
            options={{
              tabBarLabel: 'SLEEP',
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="checkbox-blank-circle-outline"
                  color={color}
                  size={28}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Meditation"
            component={Meditation}
            listeners={{
              tabPress: (e) => {
                setTabBarStyle({
                  backgroundColor: Colors.MEDITATION_NAVBAR_COLOR,
                  activeTintColor: Colors.MEDITATION_NAVBAR_TINT,
                  inactiveTintColor: Colors.MEDITATION_VECT_COLOR,
                });
                setStatusBarStyle('dark-content');
              },
            }}
            options={{
              tabBarLabel: 'MEDITATION',
              tabBarIcon: ({color, size}) => (
                <Icon name="gesture" color={color} size={30} />
              ),
            }}
          />

          <Tab.Screen
            name="Library"
            component={Library}
            options={{
              tabBarLabel: 'LIBRARY',
              tabBarIcon: ({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={30} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavTabItem: {
    top: 15,
    height: 50,
  },
  bottomNav: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -100,
    height: 97,
    borderTopWidth: 0,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  bottomNavLabel: {
    fontSize: 12,
  },
});
