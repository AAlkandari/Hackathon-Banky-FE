import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import profileStore from "./profileStore";
import { Toast } from "native-base";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this, {});
  }

  setUser = (token) => {
    AsyncStorage.setItem("myToken", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signIn = async (user) => {
    console.log(user);
    try {
      const resp = await api.post("/signin", user);
      this.setUser(resp.data.token);
      if (user)
        console.log(
          "🚀 ~ file: authStore.js ~ line 26 ~ AuthStore ~ signIn= ~ user",
          user
        );
      Toast.show({
        title: "Welcome Back",
        status: "success",
      });
    } catch (error) {
      Toast.show({
        title: "Something went wrong",
        status: "error",
        description: "Please Enter Valid Credentials",
      });
      console.log(
        "🚀 ~ file: authStore.js ~ line 25 ~ AuthStore ~ signIn= ~ error",
        error
      );
    }
  };

  signUp = async (user) => {
    try {
      const resp = await api.post("/signup", user);
      this.setUser(resp.data.token);
      //   await profileStore.assignProfileToUser();
      Toast.show({
        title: "Account verified",
        status: "success",
        description: "Thanks for signing up with us.",
      });
    } catch (error) {
      Toast.show({
        title: "Something went wrong",
        status: "error",
        description: "Please fill in required data",
      });
      console.log(
        "🚀 ~ file: authStore.js ~ line 37 ~ AuthStore ~ signUp= ~ error",
        error
      );
    }
  };
  signout = async () => {
    delete api.defaults.headers.common.Authorization;
    this.user = null;
    await AsyncStorage.removeItem("myToken");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const exp = decode(token).exp;
      if (exp > currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    } else {
      this.signout();
    }
  };

  forgotPassword = async (email, navigation) => {
    try {
      const resp = await api.put("/forgot-password", email);
      console.log(resp.data);
      //   this.setUser(resp.data.token);
      navigation.replace("Signin");
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 69 ~ AuthStore ~ forgotPassword= ~ error",
        error
      );
    }
  };
}

const authstore = new AuthStore();
authstore.checkForToken();
export default authstore;
