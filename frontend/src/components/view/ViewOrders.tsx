import { useSelector } from "react-redux";
import type { Ordered } from "../types/orders";
import { useNavigate } from "react-router-dom";



const OrderViewModal = ()  => {
  // if (!order) return null;
  const navigate = useNavigate();
  const orderData:Ordered=useSelector((state:any)=>state.orderAdd)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Order Details</h2>

        <div className="space-y-2 text-sm">
          <p><strong>Order ID:</strong> {orderData.order_id}</p>
          <p><strong>Student Name:</strong> {orderData.student_name}</p>
          <p><strong>Course:</strong> {orderData.course_purchased}</p>
          <p><strong>Date:</strong> {orderData.date}</p>
          <p><strong>Amount:</strong> ₹{orderData.amount}</p>
          <p><strong>Status:</strong> {orderData.status}</p>
        </div>

        {/* <button
          onClick={onClose}
          className="mt-4 w-full bg-primary text-white py-2 rounded"
        >
          Close
        </button> */}
           <button
          onClick={() => navigate(-1)} // ✅ navigate back to previous page
          className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-primary/90"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default OrderViewModal;