import { makeAutoObservable } from "mobx";
import api from "./api";
import { Toast } from "native-base";

class BeneficiaryStore {
  beneficiaries = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }
  fetchBeneficiaries = async () => {
    try {
      const response = await api.get("/beneficiaries");
      this.beneficiaries = response.data;
      console.log(
        "🚀 ~ file: beneficiaryStore.js ~ line 14 ~ BeneficiaryStore ~ fetchBeneficiaries= ~ this.beneficiaries",
        this.beneficiaries
      );
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createBeneficiary = async (newBeneficiary, navigation, toast) => {
    try {
      //   const profileId = profileStore.profile.find(
      //     (profId) => profId.owner?._id === authstore.user.id
      //   );

      const res = await api.post(`/beneficiaries`, newBeneficiary);
      this.beneficiaries.push(res.data);
      this.loading = false;
      Toast.show({
        title: "beneficiary is added Successfully",
        status: "success",
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        title: "Cannot Create",
        status: "error",
      });
    }
  };

  deleteBeneficiary = async (id, navigation, toast) => {
    try {
      const response = await api.delete(`/beneficiaries/${id}`);
      //destractire
      const tempBeneficiary = this.beneficiaries.filter(
        (beneficiary) => beneficiary._id !== id
      );
      this.beneficiaries = tempBeneficiary;
      this.loading = false;

      Toast.show({
        title: "Beneficiary is Deleted Successfully",
        status: "success",
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        title: "I'm Sorry You are not the Owner",
        status: "error",
      });
    }
  };
  updateBeneficiary = async (updatedBeneficiary, navigation, toast) => {
    try {
      const response = await api.put(
        `/beneficiaries/${updatedBeneficiary._id}`,
        updatedBeneficiary
      );
      const tempBeneficiary = this.beneficiaries.map((beneficiary) =>
        beneficiary._id === updatedBeneficiary._id ? response.data : beneficiary
      );
      this.beneficiaries = tempBeneficiary.data;

      navigation.navigate("BeneficiaryList");
      this.loading = false;
      toast.show({
        title: "beneficiary is Updated Successfully",
        status: "success",
      });
    } catch (error) {
      console.log(error);
      toast.show({
        title: "you cannot update",
        status: "error",
      });
    }
  };
}

const beneficiaryStore = new BeneficiaryStore();
beneficiaryStore.fetchBeneficiaries();
export default beneficiaryStore;
