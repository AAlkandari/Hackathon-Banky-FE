import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import COLORS from "../const/color";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../assets/home.jpeg")}
      >
        <View style={style.details}>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              lineHeight: 50,
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            Welcome To Swifty Bank !
          </Text>
          {/* <Text
            style={{
              color: "white",
              fontSize: 25,
              lineHeight: 40,
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          ></Text> */}
          {/* <Text
            style={{
              color: "white",
              fontSize: 15,
              lineHeight: 40,
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          >
            To Access your account click the below button!{" "}
          </Text> */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Signin")}
          >
            <View style={style.btn}>
              <Text style={{ fontWeight: "bold" }}>
                To Access your account click Here
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: "60%",
    bottom: 0,
    position: "absolute",
    width: "100%",

    // paddingHorizontal: 40,
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
export default Home;
