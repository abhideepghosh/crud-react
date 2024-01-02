import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  age: "",
  address: "",
  pincode: "",
  state: "",
  bankName: "",
  ifsc: "",
  bankBranch: "",
  otherDetails: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserDetails: (state, action) => {
      console.log(action.payload);
      state.name = action.payload.name;
      state.age = action.payload.age;
    },
    getUserAddress: (state, action) => {
      state.address = action.payload.address;
      state.pincode = action.payload.pincode;
    },
    getUserBankDetails: (state, action) => {
      state.address = action.payload.address;
      state.pincode = action.payload.pincode;
    },
  },
});

export const { getUserDetails, getUserAddress, getUserBankDetails } =
  userSlice.actions;

export default userSlice.reducer;
