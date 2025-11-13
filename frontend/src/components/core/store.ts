import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../slicers/OrderSlice";
import studentSlice from "../slicers/StudentSlice";

const store=configureStore({
    reducer:{
        orderAdd:orderSlice,
        studentAdd:studentSlice,

    }
})
export default store;