import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  Input,
  VStack,
  Center,
  Box,
  Heading,
} from "native-base";
import COLORS from "../const/color";
import beneficiaryStore from "../../stores/beneficiaryStore";

const CreateBen = ({ navigation }) => {
  const [beneficary, setBeneficiary] = useState({
    firstname: "",
    lastname: "",
    address: "",
    country: "",
    bankname: "",
    iban: "",
  });

  const handleSubmit = () => {
    beneficiaryStore.createBeneficiary(beneficary, navigation);
    setBeneficiary({
      firstname: "",
      lastname: "",
      address: "",
      country: "",
      bankname: "",
      iban: "",
    });
    navigation.navigate("Dashboard");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
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
            Add a Beneficary !{" "}
          </Heading>
          <View>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>First Name: </FormControl.Label>
                <Input
                  onChangeText={(firstname) =>
                    setBeneficiary({ ...beneficary, firstname })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormControl.Label>Last Name: </FormControl.Label>
                <Input
                  onChangeText={(lastname) =>
                    setBeneficiary({ ...beneficary, lastname })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormControl.Label>Address: </FormControl.Label>
                <Input
                  onChangeText={(address) =>
                    setBeneficiary({ ...beneficary, address })
                  }
                ></Input>
              </FormControl>
              <FormControl>
                <FormControl.Label>Bank Name: </FormControl.Label>
                <Input
                  onChangeText={(bankname) =>
                    setBeneficiary({ ...beneficary, bankname })
                  }
                ></Input>
              </FormControl>

              <FormControl>
                <FormControl.Label>Country: </FormControl.Label>
                <Input
                  onChangeText={(country) =>
                    setBeneficiary({ ...beneficary, country })
                  }
                ></Input>
              </FormControl>
              <FormControl>
                <FormControl.Label>IBAN: </FormControl.Label>
                <Input
                  onChangeText={(iban) =>
                    setBeneficiary({ ...beneficary, iban })
                  }
                ></Input>
              </FormControl>
              <VStack mt="6" justifyContent="center">
                <Button style={styles.btn} onPress={handleSubmit}>
                  Add
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
    </SafeAreaView>
  );
};

export default CreateBen;

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
