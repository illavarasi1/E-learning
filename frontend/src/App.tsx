import { Route, Routes } from "react-router-dom"
import Dash from "./components/Dash"
import Course from "./components/pages/dashboard/Course"
import DashboardContent from "./components/pages/dashboard/DashboardContent"
import Order from "./components/pages/dashboard/Order"
import { AddNewUser } from "./components/view/AddNewUser"
import OrderViewModal from "./components/view/ViewOrders"
import { ViewStudents } from "./components/view/ViewStudents"
import StudentPage from "./components/pages/dashboard/StudentPage"

function App() {
  return (
    <>
          <Routes>
           <Route path="/" element={<Dash />}>
        <Route index element={<DashboardContent />} />
        <Route path="/course" element={<Course />} />
        <Route path="/student" element={<StudentPage/>} />
        <Route path="/student/add" element={<AddNewUser/>} />
        <Route path="/student/update" element={<AddNewUser/>} />
        <Route path="/student/view" element={<ViewStudents/>} />
        <Route path="/order" element={<Order/>} />
<Route path="/order/view" element={<OrderViewModal/>} />
        </Route>
                

          </Routes>

    </>
  )
}

export default App
