import { observer } from "mobx-react";
import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import authStore from "../../stores/authStore";
import { Toast } from "native-base";
import COLORS from "../const/color";

const Home = ({ navigation }) => {
  const handleSignout = async () => {
    await authStore.signout();
    Toast.show({
      title: "You have been signed out",
      status: "success",
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../assets/home.jpeg")}
      >
        <View style={style.details}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: 25,
              fontWeight: "bold",
              backgroundColor: COLORS.grey,
            }}
          >
            Welcome To Swifty Bank !
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 35,
              fontWeight: "bold",
              backgroundColor: COLORS.grey,
            }}
          ></Text>
          <Text
            style={{
              color: COLORS.black,
              lineHeight: 25,
              marginTop: 15,
              backgroundColor: COLORS.grey,
            }}
          >
            To Access your account click on the button Below!{" "}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Signin")}
          >
            <View style={style.btn}>
              <Text style={{ fontWeight: "bold" }}>Click Here</Text>
            </View>
          </TouchableOpacity>
          {authStore.user && (
            <View style={style.btn}>
              <Text style={{ fontWeight: "bold" }} onPress={handleSignout}>
                Sign Out
              </Text>
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: "50%",
    bottom: 0,
    position: "absolute",
    paddingHorizontal: 40,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default observer(Home);
