import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import transactionStore from "../../stores/transactionStore";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  VStack,
  Center,
  Box,
  Heading,
  ScrollView,
  Spinner,
} from "native-base";

import DropDownPicker from "react-native-dropdown-picker";
import COLORS from "../const/color";
import beneficiaryStore from "../../stores/beneficiaryStore";
import accountStore from "../../stores/AccountStore";
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

const Createtransaction = ({ navigation }) => {
  const [transaction, setTransaction] = useState({
    amount: "",
    action: "debit",
    receiver: "",
    sourceaccount: "",
  });

  const [open, setOpen] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [value, setValue] = useState(null);
  const [accountValue, setAccountValue] = useState(null);
  console.log(
    "🚀 ~ file: createtransaction.js ~ line 35 ~ Createtransaction ~ accountValue",
    accountValue
  );
  if (profileStore.loading) return <Spinner />;
  const userProfile = profileStore.profiles.find(
    (profile) => profile.owner === authStore.user._id
  );

  const beneficaryList = beneficiaryStore.beneficiaries.map(
    (beneficary, index) => {
      return { label: beneficary.firstname, value: beneficary._id };
    }
  );
  const accountList = accountStore.accounts
    .filter((acc) => acc.profile._id === userProfile._id)
    .map((acc, index) => {
      return { label: acc.accountName, value: acc._id };
    });

  const handleamount = (value) => {
    setTransaction({ ...transaction, amount: value });
  };

  const handleaction = (value) => {
    setTransaction({ ...transaction, action: value });
  };

  const handleCreate = () => {
    setTransaction({
      ...transaction,
      receiver: value,
      sourceaccount: accountValue,
    });
    console.log(
      "🚀 ~ file: createtransaction.js ~ line 21 ~ Createtransaction ~ transaction",
      transaction
    );
    transactionStore.createTransaction(transaction, navigation);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* <ScrollView> */}
      <Center w="100%">
        <Box safeArea p="10" py="12" w="90%" maxW="290">
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Create Transaction !{" "}
          </Heading>
          <View>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Amount: </FormControl.Label>
                <Input onChangeText={handleamount}></Input>
              </FormControl>

              <FormControl>
                <FormControl.Label>Beneficary: </FormControl.Label>
                <DropDownPicker
                  open={open}
                  value={value}
                  items={beneficaryList}
                  setOpen={setOpen}
                  setValue={setValue}
                  // setItems={setItems}
                  // selectedValue={handleaction}
                />
              </FormControl>
              <FormControl>
                <FormControl.Label>Accounts: </FormControl.Label>
                <DropDownPicker
                  open={openAccount}
                  value={accountValue}
                  items={accountList}
                  setOpen={setOpenAccount}
                  setValue={setAccountValue}
                  // setItems={setItems}
                  // selectedValue={handleaction}
                />
              </FormControl>
              <VStack mt="6" justifyContent="center">
                <Button style={styles.btn} onPress={handleCreate}>
                  Create
                </Button>
                <Button
                  style={styles.btn}
                  onPress={() => navigation.replace("Dashboard")}
                >
                  Back
                </Button>
              </VStack>
            </VStack>
          </View>
        </Box>
      </Center>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default Createtransaction;

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: 130,
    backgroundColor: COLORS.primary,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
