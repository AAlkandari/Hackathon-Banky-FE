import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AccountStore from "../stores/AccountStore";

import {
  Box,
  Heading,
  Center,
  FormControl,
  VStack,
  Button,
  Input,
} from "native-base";

export default function CreateAccountaModal({ navigation }) {
  const [account, setAccount] = useState({
    accountName: "",
    balance: "",
  });

  const handleSubmit = async (e) => {
    await AccountStore.createAccounts(account, navigation);
    setAccount({
      accountName: "",
      balance: "",
    });
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        ></Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Create your Account
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>account Name</FormControl.Label>
            <Input
              onChangeText={(value) =>
                setAccount({ ...account, accountName: value })
              }
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>balance</FormControl.Label>
            <Input
              onChangeText={(value) =>
                setAccount({ ...account, balance: value })
              }
            />
          </FormControl>

          <Button mt="2" onPress={handleSubmit}>
            Create Account
          </Button>
          <Button onPress={() => navigation.navigate("Home")}>Home</Button>
        </VStack>
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({});
