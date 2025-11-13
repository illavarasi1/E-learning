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
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState<Ordered[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const fetchOrders = async () => {
    try {
      const response = await getOrders();
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };


  useEffect(() => {
    fetchOrders();
    fetchStudents();
  }, [])
  const value: AppContextType = {
    open,
    setOpen,
    orders,
    setOrders,
    students,
    setStudents
  };
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
