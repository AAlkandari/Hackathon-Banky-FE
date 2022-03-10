import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import transactionStore from "../../stores/transactionStore";
import {
  Box,
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
  Button,
} from "native-base";
import DropDownPicker from "react-native-dropdown-picker";

const Createtransaction = ({ navigation }) => {
  const [transaction, setTransaction] = useState({
    amount: "",
    action: "",
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Withdraw", value: "debit" },
    { label: "Deposit", value: "credit" },
  ]);

  const handleamount = (value) => {
    setTransaction({ ...transaction, amount: value });
  };

  const handleaction = (value) => {
    setTransaction({ ...transaction, action: value });
  };

  const handleCreate = () => {
    transactionStore.createTransaction(transaction, navigation);
    setTransaction({
      amount: "",
      action: "debit",
    });
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Create a Transaction
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Amount</FormControl.Label>
            <Input onChangeText={handleamount} />
          </FormControl>
          {/* <FormControl>
            <FormControl.Label>Action</FormControl.Label>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              selectedValue={handleaction}
            />
          </FormControl> */}
          {/* <FormControl>
            <FormControl.Label>Beneficiaries</FormControl.Label>
            <Input onChangeText={handle} />
          </FormControl> */}
          <Button mt="2" style={styles.btn} a onPress={handleCreate}>
            Create
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Createtransaction;

const styles = StyleSheet.create({
  btn: { backgroundColor: "#1572A1" },
});
