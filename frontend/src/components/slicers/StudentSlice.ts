import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Student } from "../types/orders";

const defaultvalue: Student = {
  student_id: "",
  student_name: "",
  email: "",
  password: "",
  role: "",
  enrolled_course: "",
  progress: "",
  registration_date: "",
  avatar: "",
};

const studentSlice = createSlice({
  name: "students",
  initialState: defaultvalue,
  reducers: {
    addStudent: (state: Student, data: PayloadAction<Student>) => {
      state.student_id = data.payload.student_id;
      state.student_name = data.payload.student_name;
      state.email = data.payload.email;
      state.role = data.payload.role;
      state.password = data.payload.password;
      state.enrolled_course = data.payload.enrolled_course;
      state.progress = data.payload.progress;
      state.registration_date = data.payload.registration_date;
      state.avatar = data.payload.avatar;
    },
  },
});
export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
