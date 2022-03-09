import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import ForgetPassword from "../Auth/ForgetPassword";

import BeneficiariesPage from "../Screens/BeneficiariesPage";
import BeneficiaryAdd from "../Screens/BeneficiaryAdd";
import BeneficiaryUpdate from "../Screens/BeneficiaryUpdate";

import AccountDetails from "../../Accounts/AccountDetails";
import AccountList from "../../Accounts/AccountList";
import CreateAccountaModal from "../../Accounts/CreateAccount.Modal";


const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="BeneficiariesPage"
    >
      <Screen name="Home" component={Home} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
      <Screen name="ForgetPassword" component={ForgetPassword} />

      <Screen name="BeneficiariesPage" component={BeneficiariesPage} />
      <Screen name="BeneficiaryAdd" component={BeneficiaryAdd} />
      <Screen name="BeneficiaryUpdate" component={BeneficiaryUpdate} />

      <Screen
        name="Accounts"
        component={AccountList}
        options={{ headerTitle: "All Accounts" }}
      />
      <Screen
        name="Create"
        component={CreateAccountaModal}
        options={{ headerShown: false }}
      />
      <Screen
        name="AccountDetails"
        component={AccountDetails}
        options={({ route }) => ({
          title: route.params.account.accountName,
          // headerRight: () => <CartIcon />,
        })}
      />

    </Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
