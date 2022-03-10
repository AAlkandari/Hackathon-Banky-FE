import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  useToast,
  VStack,
  Text,
} from "native-base";
import { StyleSheet } from "react-native";
import COLORS from "../const/color";
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const toast = useToast();
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    civilImage: "",
  });

  const handleSubmit = async () => {
    await authStore.signUp(user);
    if (authStore.user) navigation.replace("Home");
    toast.show({
      title: "Account verified",
      status: "success",
      description: "Thanks for signing up with us.",
    });
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
          Sign up to continue!
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
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              type="email"
              onChangeText={(value) => setUser({ ...user, email: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>First Name</FormControl.Label>
            <Input
              type="text"
              onChangeText={(value) => setUser({ ...user, firstName: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              type="text"
              onChangeText={(value) => setUser({ ...user, lastName: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Phone Number</FormControl.Label>
            <Input
              type="phone"
              onChangeText={(value) => setUser({ ...user, phoneNumber: value })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Civil ID Image </FormControl.Label>
            <Input
              type="file"
              onChangeText={(value) => setUser({ ...user, civilImage: value })}
            />
          </FormControl>
          <Button style={style.btn} onPress={handleSubmit}>
            Sign up
          </Button>
          <HStack mt="6" justifyContent="center">
            {/* <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate}
            >
              Sign in
            </Link> */}
          </HStack>
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
export default Signup;
