import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Ordered } from "../types/orders";
const defaultvalue: Ordered = {
  order_id: "",
  student_name: "",
  course_purchased: "",
  date: new Date().toISOString(),
  amount: 0,
  status: "Pending",
};

const orderSlice = createSlice({
  name: "orders",
  initialState: defaultvalue,
  reducers: {
    addOrder: (state: Ordered, data: PayloadAction<Ordered>) => {
      state.order_id = data.payload.order_id;
      state.student_name = data.payload.student_name;
      state.course_purchased = data.payload.course_purchased;
      state.date = data.payload.date;
      state.amount = data.payload.amount;
      state.status = data.payload.status;
    },
  },
});
export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
