import { configureStore } from "@reduxjs/toolkit";
import webSlice from "./webSlice";
import userSlice from "./userSlice";
import testSlice from "./testSlice";
import dashboardSlice from "./dashboardSlice";

export const store = configureStore({
  reducer: {
    web: webSlice,
    user: userSlice,
    test: testSlice,
    dashboard: dashboardSlice,
  },
});
