import { createSlice } from "@reduxjs/toolkit";
const localStorageUserData = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: {
    name: localStorageUserData?.name || "",
    email: localStorageUserData?.email || "",
    id: localStorageUserData?.id || "",
    interest: localStorageUserData?.interest || "",
    isVerified: localStorageUserData?.isVerified || false,
    mobile: localStorageUserData?.mobile || "",
    userType: localStorageUserData?.userType || "",
  },
  authStep: 0,
  encryptedOtp: "",
  otp: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    saveEncryptedOtp(state, action) {
      state.encryptedOtp = action.payload;
    },
    resetUser(state, action) {
      state.user = initialState.user;
    },
    saveOtp(state, action) {
      state.otp = action.payload;
    },
    changeAuthStep(state, action) {
      state.authStep = action.payload;
    },
  },
});

export const {
  changeAuthStep,
  saveEncryptedOtp,
  saveUser,
  saveOtp,
  resetUser,
} = userSlice.actions;
export default userSlice.reducer;
