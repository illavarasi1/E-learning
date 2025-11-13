import { useEffect, useState } from "react";
import { getStudents } from "../../services/httpServices";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../appcontext/AppContext";
import Pagination from "../../pagination/Pagination";
import { useDispatch } from "react-redux";
import type { Student } from "../../types/orders";
import { addStudent } from "../../slicers/StudentSlice";

const StudentPage = () => {
    const { students, setStudents } = useAppContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        getStudents().then((response) => {
            console.log("COMPONENT RECEIVED:", response);
            const dataArray = Array.isArray(response.data)
                ? response.data
                : [response.data];
            setStudents(dataArray);
        });
    }, [setStudents]);

    const onViewClick = (addstudents: Student) => {
        dispatch(addStudent(addstudents))
        navigate('/student/view')
    }
    const onUpdateClick = (addstudents: Student) => {
        dispatch(addStudent(addstudents))
        navigate('/student/update')
    }

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    const totalItems = students.length;

    const startIndex = (currentPage - 1) * pageSize;
    const currentStudents = students.slice(startIndex, startIndex + pageSize);
    return (
        <>
            {/* <!-- Main Content Area --> */}
            <main className="flex-1 p-6 lg:p-8">
                <div className="w-full max-w-7xl mx-auto">
                    {/*  PageHeading  */}
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                        <h1 className="text-text-primary-light text-3xl font-bold leading-tight tracking-tight">Student Management</h1>
                        <button onClick={() => navigate("/student/add")}
                            className="flex items-center justify-center gap-2 min-w-[84px] cursor-pointer overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">

                            <span className="material-symbols-outlined text-[20px]" >add</span>
                            <span className="truncate">Add New Student</span>
                        </button>
                    </div>
                    {/* Search and Filter Panel */}
                    <div className="bg-container-light rounded-xl border border-border-light shadow-sm p-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* <!-- SearchBar --> */}
                            <div className="lg:col-span-3">
                                <label className="flex flex-col w-full">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-12 bg-background-light border border-border-light focus-within:ring-2 focus-within:ring-primary">
                                        <div className="text-text-secondary-light flex items-center justify-center pl-3">
                                            <span className="material-symbols-outlined">search</span>
                                        </div>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-text-primary-light focus:outline-none focus:ring-0 border-none bg-transparent h-full placeholder:text-text-secondary-light px-2 text-base font-normal leading-normal" placeholder="Search by name, email..." />
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* chips */}
                        <div className="flex flex-wrap items-center gap-3 pt-4">
                            <span className="text-sm font-medium text-text-secondary-light">Filter by:</span>
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light pl-3 pr-2 border border-border-light hover:border-primary/50">
                                <p className="text-text-primary-light text-sm font-medium leading-normal">Course</p>
                                <span className="material-symbols-outlined text-text-secondary-light">arrow_drop_down</span>
                            </button>
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light pl-3 pr-2 border border-border-light hover:border-primary/50">
                                <p className="text-text-primary-light text-sm font-medium leading-normal">Enrollment Status</p>
                                <span className="material-symbols-outlined text-text-secondary-light">arrow_drop_down</span>
                            </button>
                            <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light pl-3 pr-2 border border-border-light hover:border-primary/50">
                                <p className="text-text-primary-light text-sm font-medium leading-normal">Date Registered</p>
                                <span className="material-symbols-outlined text-text-secondary-light">arrow_drop_down</span>
                            </button>
                            {/* button group */}
                            <div className="flex flex-1 gap-3 flex-wrap justify-end">
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent text-text-secondary-light text-sm font-bold leading-normal hover:text-text-primary-light">
                                    <span className="truncate">Clear</span>
                                </button>
                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-sm hover:bg-primary/90">
                                    <span className="truncate">Apply Filters</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* student data table */}
                    <div className="bg-container-light rounded-xl border border-border-light shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-border-light bg-background-light">
                                    <tr>
                                        <th className="p-4 w-12"><input className="form-checkbox rounded border-border-light text-primary focus:ring-primary/50" type="checkbox" /></th>
                                        <th className="p-4 text-sm font-semibold text-text-secondary-light uppercase tracking-wider">Student Name</th>
                                        <th className="p-4 text-sm font-semibold text-text-secondary-light uppercase tracking-wider">Enrolled Courses</th>
                                        <th className="p-4 text-sm font-semibold text-text-secondary-light uppercase tracking-wider">Progress</th>
                                        <th className="p-4 text-sm font-semibold text-text-secondary-light uppercase tracking-wider">Registration Date</th>
                                        <th className="p-4 text-sm font-semibold text-text-secondary-light uppercase tracking-wider text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentStudents.map((student: any, index: number) => (
                                        <tr className="border-b border-border-light hover:bg-primary/5" key={student.student_id || index}>
                                            <td className="p-4"><input className="form-checkbox rounded border-border-light text-primary focus:ring-primary/50" type="checkbox" /></td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <img className="size-10 rounded-full object-cover" alt={`Student avatar - ${student.student_name}`} src={student.avatar} />
                                                    <div>
                                                        <p className="font-medium text-text-primary-light">{student.student_name}</p>
                                                        <p className="text-sm text-text-secondary-light">{student.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-sm text-text-primary-light">{student.enrolled_course}</td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-full bg-background-light rounded-full h-2.5">
                                                        <div className="bg-success h-2.5 rounded-full w-[75%] " style={{ width: `${student.progress}%` }}></div>
                                                    </div>
                                                    <span className="text-sm font-medium text-text-secondary-light">{student.progress}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-sm text-text-secondary-light">{student.registration_date}</td>
                                            <td className="p-4">
                                                <div className="flex justify-center gap-2">
                                                    <button onClick={() => { onUpdateClick(student) }}
                                                        className="p-2 rounded-lg hover:bg-primary/10 text-text-secondary-light hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
                                                    <button onClick={() => { onViewClick(student) }}
                                                        className="p-2 rounded-lg hover:bg-primary/10 text-text-secondary-light hover:text-primary"><span className="material-symbols-outlined">visibility</span></button>
                                                    <button className="p-2 rounded-lg hover:bg-red-100 text-text-secondary-light hover:text-red-600"><span className="material-symbols-outlined">delete</span></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                        {/* <!-- Pagination --> */}
                        <Pagination
                            currentPage={currentPage}
                            totalItems={totalItems}
                            pageSize={pageSize}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}
export default StudentPage