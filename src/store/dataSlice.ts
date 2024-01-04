import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  data: [],
  loading: true,
};

const dataSlice = createSlice({
  name: "dataCovid",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload.map((item: any) => {
        return {
          ...item,
          month: moment(item.publishdate, "DD-MM-YYYY").format("MMMM"),
        };
      });
      if (state.data.length > 0) {
        state.loading = false;
      }
      state.data.sort((a: any, b: any) => {
        const dateA: any = new Date(
          a.publishdate.split("-").reverse().join("-")
        );
        const dateB: any = new Date(
          b.publishdate.split("-").reverse().join("-")
        );

        return dateA - dateB;
      });
    },
  },
});

export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
