import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import React, { Component } from 'react'
import { Text, Animated, Easing } from 'react-native'

import DrawerComponent from '../Components/DrawerComponent'

import LaunchScreen from '../Containers/LaunchScreen'
import TabScreen from '../Containers/TabScreen'
import LoginScreen from '../Containers/LoginScreen'
import SignupScreen from '../Containers/SignupScreen'
import ForgetPasswordScreen from '../Containers/ForgetPasswordScreen'



import styles from './Styles/NavigationStyles'

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const DrawerStack = createDrawerNavigator({
  screen1: { screen: TabScreen },
  screen2: { screen: TabScreen },
  screen3: { screen: TabScreen },
}, {
  gesturesEnabled: false,
  contentComponent: (props) => <DrawerComponent {...props} />
})

const DrawerNavigation = createStackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'none'
})

const LoginStack = createStackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgetPasswordScreen: { screen: ForgetPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: 'red'},
    title: 'You are not logged in'
  }
})

const PrimaryNav = createStackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack',
  transitionConfig: noTransitionConfig
})

export default createAppContainer(PrimaryNav)
