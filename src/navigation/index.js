import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import Details from '../screens/DetailsScreen/Details';
// import Details from "../screens/DetailsScreen";
// import Profile from "../screens/ProfileScreen";
// import Favourite from "../screens/FavouriteScreen";
// import { create } from 'react-test-renderer';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return(
    <NavigationContainer >
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "SignIn" component= {SignInScreen}/>
            <Stack.Screen name = "SignUp" component= {SignUpScreen}/>
            <Stack.Screen name = "ConfirmEmail" component= {ConfirmEmailScreen}/>
            <Stack.Screen name = "ForgotPassword" component= {ForgotPasswordScreen}/>
            <Stack.Screen name = "NewPassword" component= {NewPasswordScreen}/>
            <Stack.Screen name = "HomeScreen" component= {HomeScreen}/>
            <Stack.Screen name = "Details" component= {Details}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Navigation ;

