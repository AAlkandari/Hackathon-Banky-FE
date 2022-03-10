import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import ForgetPassword from "../Auth/ForgetPassword";
// import Dashboard from "../Screens/Dashboard";
import Createtransaction from "../Transaction/Createtransaction";

const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Dashboard"
    >
      <Screen name="Home" component={Home} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="ForgetPassword" component={ForgetPassword} />
      {/* <Screen name="Dashboard" component={Dashboard} /> */}
      <Screen name="Createtransaction" component={Createtransaction} />
    </Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
