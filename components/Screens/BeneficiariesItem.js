import { StyleSheet, Text, View } from "react-native";
import React from "react";
import beneficiaryStore from "../../stores/beneficiaryStore";
import { Button, Spinner } from "native-base";

const BeneficiariesItem = ({ beneficiary, navigation }) => {
  if (beneficiaryStore.loading) return <Spinner />;

  return (
    <View>
      <Text>
        {beneficiary.firstname} {beneficiary.lastname}.{beneficiary.bankname}
      </Text>
      <Text>
        {beneficiary.country}, IBAN: {beneficiary.iban}
      </Text>
      <Button
        onPress={() => {
          navigation.navigate("BeneficiaryUpdate", {
            beneficiaryId: beneficiary,
          });
        }}
      >
        Update Beneficiary
      </Button>

      <Button
        onPress={() => beneficiaryStore.deleteBeneficiary(beneficiary._id)}
      >
        Delete Beneficiary
      </Button>
    </View>
  );
};

export default BeneficiariesItem;

const styles = StyleSheet.create({});
