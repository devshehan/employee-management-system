import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="mx-auto p-8 bg-cyan-200">
        <button
          onClick={() => navigate("/addEmployee")}
          className="bg-green-400 p-2 px-6 rounded hover:bg-green-700 text-white"
        >
          Add New Employee
        </button>

        
      </div>
    </div>
  );
};

export default EmployeeList;
