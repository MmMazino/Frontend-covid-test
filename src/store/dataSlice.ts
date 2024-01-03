import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
};

const dataSlice = createSlice({
  name: "dataCovid",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
      if (state.data.length > 0) {
        state.loading = false;
      }
    },
  },
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
