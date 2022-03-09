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
import { StyleSheet, View } from "react-native";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import { useToast } from "native-base";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState({
    email: "",
  });
  const handleSubmit = async () => {
    await authStore.forgotPassword(email);
    if (authStore.forgotPassword) navigation.replace("ResetPassword");
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
            <FormControl.Label>Email</FormControl.Label>
            <Input
              onChangeText={(value) => setEmail({ ...email, email: value })}
              placeholder="example@swifty.com"
            />
          </FormControl>
          <View style={style.buttonsWrapper}>
            <Button
              style={style.btn}
              mt="2"
              onPress={() => navigation.goBack()}
            >
              Back
            </Button>
            <Button style={style.btn} mt="2" onPress={handleSubmit}>
              Send Link
            </Button>
          </View>
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
  buttonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default observer(ForgetPassword);
