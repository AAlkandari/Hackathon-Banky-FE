import { StyleSheet, Text, View, Container } from "react-native";
import React from "react";
import AccountStore from "../stores/AccountStore";
import AccountItem from "./AccountItem";
import { observer } from "mobx-react";

import { ScrollView } from "react-native";

const AccountList = ({ navigation }) => {
  const AccountList = AccountStore.accounts.map((account) => (
    <AccountItem key={account._id} acount={account} navigation={navigation} />
  ));

  return (
    <ScrollView style={{ flex: 1, flexDirection: "column", gap: 10 }}>
      {AccountList}
    </ScrollView>
  );
};

export default observer(AccountList);

const styles = StyleSheet.create({});
