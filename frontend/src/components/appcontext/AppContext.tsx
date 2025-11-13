import { createContext, useContext, useEffect, useState } from "react";
import { getOrders, getStudents } from "../services/httpServices";
import type { Ordered, Student } from "../types/orders";
type AppContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  orders: Ordered[];
  setOrders: React.Dispatch<React.SetStateAction<Ordered[]>>;
   students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}
const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false); // <-- your same state
  const [orders,setOrders]=useState<Ordered[]>([]);
  const [students,setStudents]=useState<Student[]>([]);
const fetchOrders = async () => {
  try {
    const response = await getOrders(); // ✅ call axios service
    setOrders(response.data);
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};
const fetchStudents = async () => {
  try {
    const response = await getStudents(); // ✅ call axios service
setStudents(response.data);
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};
// const fetchStudents = async () => {
//   try {
//     const response = await getStudents();
//     // ✅ Always ensure it's an array
//     const data = Array.isArray(response.data) ? response.data : [response.data];
//     setStudents(data);
//   } catch (error) {
//     console.error("Error fetching students:", error);
//     setStudents([]); // prevent crash if API fails
//   }
// };

useEffect(()=>{
  fetchOrders();
  fetchStudents();
},[])
const value: AppContextType = {
  open,
  setOpen,
  orders,
  setOrders,
  students,
  setStudents
};
  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
