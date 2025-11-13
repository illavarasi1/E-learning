import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { Student } from "../types/orders";

export const ViewStudents = () => {
    // if (!order) return null;
    const navigate = useNavigate();
    const studentData: Student = useSelector((state: any) => state.studentAdd)
    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-96 shadow-lg">
                <h2 className="text-lg font-semibold mb-4">student Details</h2>

               
                    {/* Header: Avatar + ID */}
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-sm text-gray-500">Student ID</p>
                            <p className="text-lg font-semibold">{studentData.student_id}</p>
                        </div>
                        <img
                            src={studentData.avatar}
                            alt={studentData.student_name}
                            className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
                        />
                    </div>

                    {/* Student Info */}
                    <div className="space-y-2 text-sm">
                        <p>
                            <strong>Name:</strong> {studentData.student_name}
                        </p>
                        <p>
                            <strong>Email:</strong> {studentData.email}
                        </p>
                        <p>
                            <strong>Course Enrolled:</strong> {studentData.enrolled_course}
                        </p>
                        <p>
                            <strong>Progress:</strong> {studentData.progress}
                        </p>
                        <p>
                            <strong>Registration Date:</strong> {studentData.registration_date}
                        </p>
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
    )
}
