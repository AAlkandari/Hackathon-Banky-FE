import { makeAutoObservable } from "mobx";
import api from "./api";

class TransactionStore {
  constructor() {
    makeAutoObservable(this, {});
  }
  transactions = [];
  loading = true;

  fetchTransactions = async () => {
    try {
      const res = await api.get("/transaction");
      this.transactions = res.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createTransaction = async (newTransaction, navigation) => {
    try {
      const response = await api.post("/transaction", newTransaction);
      this.transactions.push(response.data);
      navigation.goBack();
      //   navigation.navigate("Dashboard")
    } catch (error) {
      console.log(error);
    }
  };
}

const transactionStore = new TransactionStore();
transactionStore.fetchTransactions();
export default transactionStore;
