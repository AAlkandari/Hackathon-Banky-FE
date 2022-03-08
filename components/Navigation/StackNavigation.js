import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import ForgetPassword from "../Auth/ForgetPassword";

const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="ForgetPassword" component={ForgetPassword} />
    </Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
