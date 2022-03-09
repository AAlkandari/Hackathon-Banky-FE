import { makeAutoObservable } from "mobx";
import api from "./api";

class AccountStore {
  accounts = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchAccount = async () => {
    try {
      const res = await api.get("/accounts");
      this.accounts = res.data;
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  createAccounts = async (newAccount, navigation) => {
    try {
      const response = await api.post("/accounts", newAccount);
      this.accounts.push(response.data);

      navigation.goBack();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
}
const accountStore = new AccountStore();
accountStore.fetchAccount();
export default accountStore;
