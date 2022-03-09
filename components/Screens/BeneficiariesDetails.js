import { observer } from "mobx-react";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import COLORS from "../const/color";
import authStore from "../../stores/authStore";
import beneficiaryStore from "../../stores/beneficiaryStore";

const BeneficiariesDetails = ({ navigation, route }) => {
  const { banky } = route.params;

  const handleRemove = () => {
    beneficiaryStore.deleteBeneficiary(banky._id);
    navigation.navigate("Dashboard");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar translucent backgroundColor={COLORS.primary} />
      <ImageBackground style={{ flex: 0.7 }}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={() => navigation.goBack()}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: "100%",
              fontSize: 30,
              fontWeight: "bold",
              color: COLORS.white,
              marginBottom: 20,
            }}
          >
            {banky.name}
          </Text>
        </View>
        <View style={style.detailsContainer}>
          <View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Beneficary Details
            </Text>
            <Text> </Text>
            <Text
              style={{
                marginLeft: 1,
                fontSize: 20,
                fontWeight: "bold",
                color: COLORS.primary,
                backgroundColor: "white",
                marginBottom: 10,
              }}
            >
              {" "}
              Beneficary Name: {banky.firstname} {banky.lastname}
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                fontWeight: "bold",
                color: COLORS.primary,
                backgroundColor: "white",
                marginBottom: 10,
              }}
            >
              Bank Address: {banky.address}
            </Text>
            <Text
              style={{
                marginLeft: 5,
                marginBottom: 10,
                fontSize: 19,
                fontWeight: "bold",
                color: COLORS.primary,
                backgroundColor: "white",
              }}
            >
              Country: {banky.country}
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                fontWeight: "bold",
                color: COLORS.primary,
                backgroundColor: "white",
                marginBottom: 10,
              }}
            >
              IBAN: {banky.iban}
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 20,
                fontWeight: "bold",
                color: COLORS.primary,
                backgroundColor: "white",
                marginBottom: 10,
              }}
            >
              Bank: {banky.bankname}
            </Text>
          </View>

          {authStore.user?._id && (
            <View style={style.iconContainer}>
              <Icon2
                name="trash"
                color={COLORS.white}
                size={30}
                onPress={handleRemove}
              />
            </View>
          )}
          <View style={{ marginTop: 0.1 }}></View>
        </View>
        <View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: COLORS.grey,
                marginLeft: 2,
              }}
            ></Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={handleRemove}>
            <View style={style.btn}>
              <Text style={{ fontWeight: "bold" }}>Delete Beneficary</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <View style={style.btn}>
              <Text style={{ fontWeight: "bold" }}>Back To Dashboard</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default observer(BeneficiariesDetails);

const style = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 100,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },

  iconContainer: {
    height: 60,
    width: 60,
    top: -20,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    left: 500,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer2: {
    height: 60,
    width: 60,
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: -500,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    top: -50,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 3,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 60,
  },
  footer: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
    borderRadius: 20,
  },
  buttonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btn: {
    height: 50,
    width: 300,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 55,
  },
});
