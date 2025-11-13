import { useForm } from "react-hook-form";
import type { Student } from "../types/orders";
import { addUser, updateUser } from "../services/httpServices";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const AddNewUser = () => {
  const{
    register,
    handleSubmit,
    reset,
    formState:{errors}
  }=useForm<Student>();
  const navigate=useNavigate();
const location=useLocation();
  const userData:Student=useSelector((state:any)=>state.studentAdd);
useEffect(()=>{
  if(location.pathname==="/student/update"){
  
    reset(userData);
  }},[])
  const onSubmit=async(data:Student)=>{
     if(location.pathname==="/student/update"){
      await updateUser(data);
     }else{
      await addUser(data);
     }
    console.log(data);
   await addUser(data);
   
  }

  return (
    <>
      <main className="flex-1 p-8 bg-gray-100">
        <form onSubmit={handleSubmit(onSubmit)}>
  <div className="max-w-4xl mx-auto">

          {/* PageHeading */}
          <div className="flex flex-wrap justify-between gap-3 mb-8">
            <div className="flex flex-col gap-3">
              <p className="text-gray-900 text-4xl font-black leading-tight tracking-[-0.033em]">Add New User</p>
              <p className="text-gray-600 text-base font-normal leading-normal">
                Create a new profile for a student, instructor, or administrator.
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">

            {/* Personal Information */}
            <h3 className="text-gray-800 text-lg font-bold px-4 pb-2 pt-4">Personal Information</h3>

            <div className="flex max-w-full flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-800 text-base font-medium pb-2">First Name</p>
                <input {...register("student_name",{
                    required: "First name is required",
                  })}
                  className={`w-full rounded-lg border ${
                    errors.student_name ? "border-red-500" : "border-gray-300"
                  }  border-gray-300 bg-white text-gray-900 h-14 p-4 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:outline-none`}
                  placeholder="Enter first name"
                />
                {errors.student_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.student_name.message}
                  </p>
                )}
              </label>

              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-gray-800 text-base font-medium pb-2">Last Name</p>
                <input {...register("student_name",{
                    required: "Last name is required",
                  })}
                  className={`w-full rounded-lg border ${
                    errors.student_name ? "border-red-500" : "border-gray-300"
                  }  border-gray-300 bg-white text-gray-900 h-14 p-4 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:outline-none`}
                  placeholder="Enter last name"
                />
                {errors.student_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.student_name.message}
                  </p>
                )}
              </label>
            </div>

            {/* Account Credentials */}
            <h3 className="text-gray-800 text-lg font-bold px-4 pb-2 pt-8">Account Credentials</h3>

            <div className="px-4 py-3">
              <label className="flex flex-col w-full">
                <p className="text-gray-800 text-base font-medium pb-2">Email Address</p>
                 <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  type="email"
                  className={`w-full rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } bg-white text-gray-900 h-14 p-4 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:outline-none`}
                   autoComplete="username" 
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </label>
            </div>

            <div className="px-4 py-3">
              <label className="flex flex-col w-full">
                <p className="text-gray-800 text-base font-medium pb-2">Password</p>
                <div className="relative">
               <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                        message:
                          "Password must include uppercase, lowercase, number, and special character",
                      },
                    })}
                    type="password"
                    className={`w-full rounded-lg border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } bg-white text-gray-900 h-14 p-4 pr-12 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 focus:outline-none`}
                    placeholder="Enter a secure password"
                    autoComplete="current-password"
                  />
                </div>
                {errors.password ? (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                ) : (
                  <p className="text-gray-500 text-sm mt-2">
                    Password must be at least 8 characters long and include
                    symbols, numbers, and uppercase letters.
                  </p>
                )}
                </label>
            </div>

            {/* Role */}
            <h3 className="text-gray-800 text-lg font-bold px-4 pb-2 pt-8">Platform Role</h3>

            <div className="px-4 py-3">
              <label className="flex flex-col w-full">
                <p className="text-gray-800 text-base font-medium pb-2">Role</p>
                <div className="relative">
                  <select {...register("role")} className="appearance-none w-full rounded-lg border border-gray-300 bg-white text-gray-900 h-14 p-4 focus:ring-2 focus:ring-blue-600 focus:outline-none">
                    <option>Student</option>
                    <option>Instructor</option>
                    <option>Admin</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </label>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4 mt-8 px-4 py-3">
              <button onClick={()=>{reset(); navigate("/student");}} className="px-6 py-3 rounded-lg text-gray-700 font-semibold bg-white border border-gray-300 hover:bg-gray-100 transition-colors">
                Cancel
              </button>
              <button className="px-6 py-3 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-colors">
              {location.pathname==='/student/update'?'update':'create'} User
              </button>
            </div>

          </div>
        </div>
        </form>
      
      </main>
    </>
  );
};
