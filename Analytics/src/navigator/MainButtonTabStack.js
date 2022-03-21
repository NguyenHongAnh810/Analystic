import React from 'react';
import {StyleSheet, Dimensions, ScrollView, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/* icon */
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

import account from '../screen/Main/Account/Account';
import home from '../screen/Main/Home/Home';
import History from '../screen/Main/History/History';
import Wallet from '../screen/Main/Wallet/Wallet';
import { Color } from '../assets/color';


const Tab = createBottomTabNavigator();

const MainButtonTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.blueFacebook,
        tabBarInactiveTintColor: 'gray',
        style: {
          backgroundColor: 'red',
          borderTopColor: 'rgba(225,225,225,0.2)',
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon2 name="house" color={color} size={size} />
          ),
        }}
        component={home}
      />
      <Tab.Screen
        name="History"
        options={{
          // title: "Search",
          tabBarIcon: ({color, size}) => (
            <Icon1 name="message" color={color} size={size} />
          ),
        }}
        component={History}
      />
      <Tab.Screen
        name="Wallet"
        options={{
          // title: 'Add',
          tabBarIcon: ({color, size}) => (
            <Icon1 name="squared-plus" color={color} size={size} />
          ),
        }}
        component={Wallet}
      />

      <Tab.Screen
        name="Account"
        options={{
          title: 'Account',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
        component={account}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({});

export default MainButtonTabStack;
