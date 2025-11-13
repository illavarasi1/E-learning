import axios from "axios";
import type { Ordered, Student } from "../types/orders";

export const getOrders = () => axios.get<Ordered[]>("/assets/orders.json");
export const getCourse = () => axios.get("/assets/course.json");
export const getStudents = () => axios.get<Student[]>("/assets/students.json");
export const addUser=async(students:Student)=>{
      const body={
        student_id:students.student_id,
        student_name:students.student_name,
        email:students.email,
        enrolled_course:students.enrolled_course,
        progress:students.progress,
        registration_date:students.registration_date,
        avatar:students.avatar,
    }
await axios.post("/assets/students.json/add",body);
}
export const updateUser=async(students:Student)=>{
    const body={
        student_id:students.student_id,
        student_name:students.student_name,
        email:students.email,
        enrolled_course:students.enrolled_course,
        progress:students.progress,
        registration_date:students.registration_date,
        avatar:students.avatar,
    }
await axios.put(`/assets/students.json/update/${students.student_id}`,body);
}
export const deleteUser=async(oreder_id:string)=>{
await axios.delete(`/assets/students.json/delete/${oreder_id}`);
}