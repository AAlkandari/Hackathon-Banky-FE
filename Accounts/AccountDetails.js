import { Button, Spinner, Center, Box } from "native-base";
import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import AccountStore from "../stores/AccountStore";
import { baseURL } from "../stores/api";

const AccountDetails = ({ navigation, route }) => {
  if (AccountStore.loading) return <Spinner />;
  const account = route.params.account;
  return (
    <SafeAreaView>
      <View>
        <Center>
          <Text>{account.accountName}</Text>

          <Text>{account.balance}</Text>

          <Button onPress={() => navigation.navigate("Home")}>Home</Button>
        </Center>
      </View>
    </SafeAreaView>
  );
};

export default AccountDetails;
