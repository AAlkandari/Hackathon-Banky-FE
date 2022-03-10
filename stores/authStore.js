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
    try {
      const resp = await api.post("/signin", user);
      this.setUser(resp.data.token);
      if (user)
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
    }
  };

  signUp = async (user) => {
    try {
      const resp = await api.post("/signup", user);
      this.setUser(resp.data.token);
      await profileStore.assignProfileToUser();
      if (user) {
        Toast.show({
          title: "Account verified",
          status: "success",
          description: "Thanks for signing up with us.",
        });
      } else {
        Toast.show({
          title: "Account not created",
          status: "warning",
          description: "Thanks for signing up with us.",
        });
      }
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

  forgotPassword = async (email) => {
    try {
      const resp = await api.put("/forgot-password", email);
      Toast.show({
        title: "Link has been sent",
        status: "success",
        description: "Please Check You Email ",
      });
    } catch (error) {
      Toast.show({
        title: "Something went wrong",
        status: "error",
        description: "Please fill in required data",
      });
      console.log(
        "🚀 ~ file: authStore.js ~ line 69 ~ AuthStore ~ forgotPassword= ~ error",
        error
      );
    }
  };

  resetPassword = async (newPass, resetLink) => {
    try {
      const resp = await api.put("/reset-password", newPass, resetLink);
      Toast.show({
        title: "Your Password has been changed",
        status: "success",
        description: "Please login with your new password ",
      });
    } catch (error) {
      Toast.show({
        title: "Something went wrong",
        status: "error",
        description: "",
      });
      console.log(
        "🚀 ~ file: authStore.js ~ line 110 ~ AuthStore ~ resetPassword= ~ error",
        error
      );
    }
  };
}

const authstore = new AuthStore();
authstore.checkForToken();
export default authstore;
