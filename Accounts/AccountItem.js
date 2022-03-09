import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import { Pressable, Center } from "native-base";

const AccountItem = ({ navigation, account }) => {
  return (
    <SafeAreaView>
      <Pressable
        onPress={() =>
          navigation.navigate("AccountDetails", { account: account })
        }
      >
        <Center>
          <Text style={{ fontSize: 20 }}>{account.accountName}</Text>
          <Text style={{ fontSize: 20 }}>{account.balance}</Text>
        </Center>
      </Pressable>
    </SafeAreaView>
  );
};

export default AccountItem;

const styles = StyleSheet.create({});
