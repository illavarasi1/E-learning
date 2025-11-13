export interface Ordered {
  order_id: string;
  student_name: string;
  course_purchased: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Cancelled" | string;
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
