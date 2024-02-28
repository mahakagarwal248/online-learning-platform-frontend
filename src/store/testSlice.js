import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testDetails: {},
};
const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTestDetails(state, action) {
      state.testDetails = action.payload;
    },
  },
});

export const { setTestDetails } = testSlice.actions;
export default testSlice.reducer;
