export interface Ordered {
  order_id: string;
  student_name: string;
  course_purchased: string;
  date: string;     // ISO string, use string type
  amount: number;
  status: "Paid" | "Pending" | "Cancelled" | string; // allow multiple statuses
}
export interface Student {
  student_id: string;
  student_name: string;
  password: string;
  email: string;
  role: string;
  enrolled_course: string;
  progress: string;         
  registration_date: string; 
   avatar: string; 
}
