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
  useToast,
} from "native-base";
import React from "react";
import { useState } from "react";
import COLORS from "../const/color";
import { StyleSheet } from "react-native";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Signin = ({ navigation }) => {
  const toast = useToast();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    await authStore.signIn(user);
    if (authStore.user) navigation.replace("Dashboard");
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
          Please enter your credentials
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              onChangeText={(value) => setUser({ ...user, username: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </FormControl>
          <Button style={style.btn} mt="2" onPress={handleSubmit}>
            Sign in
          </Button>
          <VStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
                marginLeft: 5,
              }}
            >
              New user ?{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: 5,
                }}
                onPress={() => navigation.navigate("Signup")}
              >
                Sign Up
              </Text>
            </Text>

            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Forgot Your Password ?{" "}
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: 5,
                }}
                onPress={() => navigation.navigate("ForgetPassword")}
              >
                Reset Password
              </Text>
            </Text>
          </VStack>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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

export default observer(Signin);
