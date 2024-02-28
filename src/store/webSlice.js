import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  hide: true,
  modalStep: 0,
  preModalStep: 0,
};
const webSlice = createSlice({
  name: "web",
  initialState,
  reducers: {
    changeShow(state, action) {
      state.show = action.payload;
    },
    changemodalStep(state, action) {
      state.preModalStep = state.modalStep;
      state.modalStep = action.payload;
    },
  },
});

export const { changeShow, changemodalStep } = webSlice.actions;
export default webSlice.reducer;
