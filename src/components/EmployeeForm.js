import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const EmployeeForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const createEmployee = async (data) => {

    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );
      
    console.log("FORM RESPONSE......", savedUserResponse);

    navigate("/")
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createEmployee)} className="mt-8">
        <div className="space-y-5">


          <div>
            <label
              htmlFor="Student_name"
              className="text-base font-medium text-white dark:text-gray-200"
            >
              {" "}
              Student Name{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Full Name"
                {...register("Student_name")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="batch"
              className="text-base font-medium text-white dark:text-gray-200"
            >
              
              Batch{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="number"
                placeholder="Enter Your Batch"
                {...register("batch")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="regisNo"
              className="text-base font-medium text-white dark:text-gray-200"
            >
              {" "}
              Registration No.{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Registration Number"
                {...register("regisNo")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="department"
              className="text-base font-medium text-white dark:text-gray-200"
            >
              {" "}
               Department{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="text"
                placeholder="Enter Your Department"
                {...register("department")}
              ></input>
            </div>
          </div>


          <div>
            <label
              htmlFor="dsa"
              className="text-base font-medium text-white dark:text-gray-200"
            >
              {" "}
               Dsa Marks{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="number"
                placeholder="Enter Your DSA MARK"
                {...register("dsa")}
              ></input>
            </div>
          </div>


          <div>
            <label
              htmlFor="daa"
              className="text-base font-medium text-white dark:text-gray-200"
            >
              {" "}
               Daa Marks{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="number"
                placeholder="Enter Your DAA MARK"
                {...register("daa")}
              ></input>
            </div>
          </div>




          <div>
            <label
              htmlFor="dsd"
              className="text-base font-medium dark:text-gray-200"
            >
              {" "}
              Dsd Marks{" "}
            </label>
            <div className="mt-2.5">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="number"
                placeholder="Enter Your DSD MARK"
                {...register("dsd")}
              ></input>
            </div>
          </div>
          
            
          
        

          <div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            >
              Create Employeee
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-2 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
