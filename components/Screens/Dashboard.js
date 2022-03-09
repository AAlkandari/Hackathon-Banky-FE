import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
// import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon5 from "react-native-vector-icons/FontAwesome";
import COLORS from "../const/color";
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";
import beneficiaryStore from "../../stores/beneficiaryStore";
import BeneficiariesItem from "./BeneficiariesItem";
import { Spinner, useBreakpointValue } from "native-base";

// import profileStore from "../../stores/profileStore";

const { width } = Dimensions.get("screen");

const Dashboard = ({ navigation }) => {
  if (beneficiaryStore.loading) return <Spinner />;
  const handleSubmit = async () => {
    await authStore.signout();
    navigation.replace("Home");
    console.log("signedOut");
  };

  const categoryIcons = [
    <Icon1 name="credit-card" size={25} color={COLORS.primary} />,
    <Icon5
      name="user-plus"
      size={25}
      color={COLORS.primary}
      onPress={() => navigation.navigate("CreateBen")}
    />,
    <Icon2 name="euro" size={25} color={COLORS.primary} />,
    <Icon4 name="logout" size={25} color={COLORS.red} onPress={handleSubmit} />,
  ];

  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ banky }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("BeneficiariesDetails", { banky })}
      >
        <ImageBackground style={style.cardImage}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {banky.firstname}
            {banky.lastname}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                BANK: {banky.bankname}
              </Text>
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                IBAN: {banky.iban}{" "}
              </Text>
              <View style={{ flexDirection: "row" }}></View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 100,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={style.headerTitle}>Welcome Back</Text>
            <Text style={style.headerTitle}>
              {authStore.user && authStore.user.username}
            </Text>
          </View>
        </View>

        <ListCategories />
        <Text style={style.sectionTitle}>Beneficiaries</Text>
        <Icon5 />
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={beneficiaryStore.beneficiaries}
            renderItem={({ item }) => <Card banky={item} />}
            backgroundColor={COLORS.primary}
          />
          <Text style={style.sectionTitle}>Last Transactions</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default observer(Dashboard);

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
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 60,
    width: 60,
    // backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 40,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
});
