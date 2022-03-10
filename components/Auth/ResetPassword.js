import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
} from "native-base";
import React from "react";
import { useState } from "react";
import COLORS from "../const/color";
import { StyleSheet } from "react-native";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const ResetPassword = ({ navigation }) => {
  const [password, setPassword] = useState({
    newPass: "",
    resetLink: "",
  });

  const handleSubmit = async () => {
    await authStore.resetPassword(password);
    if (authStore.resetPassword) navigation.replace("Signin");
  };

  return (
    <Center w="100%" style={style.signWrapper}>
      <Box safeArea p="10" py="12" w="90%" maxW="400">
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="md"
        >
          Reset Your Password
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>New Password</FormControl.Label>
            <Input
              onChangeText={(value) =>
                setPassword({ ...password, newPass: value })
              }
              type="password"
              placeholder="Enter Your New Password"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Token Provided</FormControl.Label>
            <Input
              type="text"
              onChangeText={(value) =>
                setPassword({ ...password, resetLink: value })
              }
              placeholder="Enter your token here"
            />
          </FormControl>
          <Button style={style.btn} mt="2" onPress={handleSubmit}>
            Submit
          </Button>
          {/* <Button style={style.btn} mt="2" onPress={() => navigation.goBack()}>
              Back
            </Button> */}
        </VStack>
      </Box>
    </Center>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 23,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.primary,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  signWrapper: {
    flexGrow: 0.1,
    justifyContent: "center",
  },
});

export default observer(ResetPassword);
