import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="mx-auto p-8 ">
        <button
          onClick={() => navigate("/addEmployee")}
          className="bg-green-400 p-2 px-6 rounded hover:bg-green-700 text-white"
        >
          Add New Employee
        </button>

        <div className="flex shadow border-b mt-4">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left text-gray-500  px-6 py-3 ">
                  First Name
                </th>
                <th className="text-left text-gray-500  px-6 py-3 ">
                  Last Name
                </th>
                <th className="text-left text-gray-500  px-6 py-3 ">
                  Email ID
                </th>
                <th className=" text-gray-500  px-6 py-3 ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left font-thin px-6 py-4">
                  <div>Shehaan</div>
                </td>
                <td className="text-left font-thin px-6 py-4">
                  <div>Avishka</div>
                </td>
                <td className="text-left font-thin px-6 py-4">
                  <div>devshehan@gmail.com</div>
                </td>
                <td className="flex justify-center px-4">
                  <div className="space-x-4">
                    <button
                      // onClick={handleSubmit}
                      className="bg-green-400 p-2 px-6 rounded hover:bg-green-700 text-white"
                    >
                      Edit
                    </button>
                    <button
                      // onClick={clearForm}
                      className="bg-red-400 p-2 px-6 rounded hover:bg-red-700 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
