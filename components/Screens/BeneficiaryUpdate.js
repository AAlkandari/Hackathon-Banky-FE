import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { observer } from "mobx-react";
import { Input, Button, useToast } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import beneficiaryStore from "../../stores/beneficiaryStore";

const UpdateBeneficiaryForm = ({ route, navigation }) => {
  const beneficiary2 = route.params;
  console.log(
    "🚀 ~ file: BeneficiaryUpdate.js ~ line 18 ~ UpdateBeneficiaryForm ~ beneficiary2",
    beneficiary2
  );

  const [beneficiary, setBeneficiary] = useState({
    _id: beneficiary2._id,
    firstname: beneficiary2.firstname,
    lastname: beneficiary2.lastname,
    address: beneficiary2.address,
    country: beneficiary2.country,
    bankname: beneficiary2.bankname,
    iban: beneficiary2.iban,
  });

  const handlefirstname = (event) => {
    setBeneficiary({ ...beneficiary, firstname: event });
  };
  const handlelastname = (event) => {
    setBeneficiary({ ...beneficiary, lastname: event });
  };
  const handleaddress = (event) => {
    setBeneficiary({ ...beneficiary, address: event });
  };
  const handlecountry = (event) => {
    setBeneficiary({ ...beneficiary, country: event });
  };
  const handlebankname = (event) => {
    setBeneficiary({ ...beneficiary, bankname: event });
  };
  const handleiban = (event) => {
    setBeneficiary({ ...beneficiary, iban: event });
  };
  const toast = useToast();

  const handleSubmit = () => {
    beneficiaryStore.updateBeneficiary(beneficiary, navigation, toast);
    setBeneficiary({
      firstname: "",
      lastname: "",
      address: "",
      country: "",
      bankname: "",
      iban: "",
    });
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Update Beneficiary</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>
          <Icon name="modx" /> First Name:
        </Text>
        <Input
          value={beneficiary.firstname}
          h={10}
          borderColor={"black"}
          onChangeText={handlefirstname}
        />

        <Text style={styles.label}>
          <Icon name="map-signs" /> Last Name:
        </Text>
        <Input
          type="text"
          h={10}
          borderColor={"black"}
          onChangeText={handlelastname}
          value={beneficiary.lastname}
        />

        <Text style={styles.label}>
          <Icon name="map-signs" /> Beneficiary's Bank:
        </Text>
        <Input
          type="text"
          h={10}
          borderColor={"black"}
          onChangeText={handlebankname}
          value={beneficiary.bankname}
        />

        <Text style={styles.label}>
          <Icon name="map-signs" /> Beneficiary's Bank's Country:
        </Text>
        <Input
          type="text"
          h={10}
          borderColor={"black"}
          onChangeText={handlecountry}
          value={beneficiary.country}
        />

        <Text style={styles.label}>
          <Icon name="map-signs" /> Beneficary's Account IBAN:
        </Text>
        <Input
          type="text"
          h={10}
          borderColor={"black"}
          onChangeText={handleiban}
          value={beneficiary.iban}
        />

        <Text style={styles.label}>
          <Icon name="file-text" /> Beneficiary Address:
        </Text>
        <Input
          value={beneficiary.handleaddress}
          h={120}
          borderColor={"black"}
          multiline={true}
          onChangeText={handleaddress}
        />
      </View>
      <Button onPress={handleSubmit} style={styles.addbeneficiarybttn}>
        <Text style={styles.addbeneficiarytxt}>Update Beneficiary </Text>
      </Button>
    </ScrollView>
  );
};

export default observer(UpdateBeneficiaryForm);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    margin: 20,
  },
  mainTitle: {
    fontWeight: "bold",
    fontSize: 30,
  },
  form: {
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
  },
  addBtn: {
    display: "flex",
    alignContent: "center",
    paddingTop: 10,
    alignItems: "flex-end",
  },
  photoTxtBtn: {
    alignSelf: "center",
    margin: 20,
    backgroundColor: "#8E9A69",
    color: "white",
    borderRadius: 20,
    width: "60%",
    height: 35,
    marginTop: 5,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 3,
  },
  addbeneficiarybttn: {
    alignSelf: "center",
    margin: 20,
    backgroundColor: "#8E9A69",
    color: "white",
    borderRadius: 20,
    width: "60%",
    height: 40,
    marginTop: 20,
    textAlign: "center",
    fontSize: 25,
    paddingTop: 6,
  },
  addbeneficiarytxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
