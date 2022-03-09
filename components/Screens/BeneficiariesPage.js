import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Spinner } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import beneficiaryStore from "../../stores/beneficiaryStore";
import BeneficiariesItem from "./BeneficiariesItem";
import { observer } from "mobx-react";
import { SafeAreaView } from "react-native";

const BeneficiariesPage = ({ route, navigation }) => {
  if (beneficiaryStore.loading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Spinner />
      </View>
    );
  const beneficiaryList = beneficiaryStore.beneficiaries.map((beneficiary) => (
    <BeneficiariesItem
      beneficiary={beneficiary}
      key={beneficiary._id}
      navigation={navigation}
    />
  ));
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Text>BeneficiariesPage</Text>
      <Text>{beneficiaryList}</Text>
      <Button onPress={() => navigation.navigate("BeneficiaryAdd")}>
        Add Beneficiary
      </Button>
    </View>
  );
};

export default observer(BeneficiariesPage);

const styles = StyleSheet.create({});
