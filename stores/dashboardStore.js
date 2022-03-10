import { makeAutoObservable } from "mobx";
import api from "./api";

class DashboardStore {
  constructor() {
    makeAutoObservable(this);
  }
  profiles = [];
  loading = true;
  getProfiles = async () => {
    try {
      const res = await api.get("/profile");
      this.profiles = res.data;
      this.loading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: profileStore.js ~ line 19 ~ ProfileStore ~ getProfiles= ~ error",
        error
      );
    }
  };
}
const dashboardStore = new DashboardStore();
dashboardStore.fetchProfile();
export default dashboardStore;
