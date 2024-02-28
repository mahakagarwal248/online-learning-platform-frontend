import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testData: {},
  courseData: {},
};
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setTestData(state, action) {
      state.testData = action.payload;
    },
    setCourseData(state, action) {
      state.courseData = action.payload;
    },
  },
});

export const { setTestData, setCourseData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
