import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from 'axios';
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();

  // fetch the data
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/getAllEmployees"
        );
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    const deleteResoponse = axios.delete("http://localhost:8080/api/v1/" + id).then((res) => {
      if(employees){
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id != id);
        })
      }
    })

    deleteResoponse();
  };

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
                <th className=" text-gray-500  px-6 py-3 ">Actions</th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {employees.map((employee) => (
                  <Employee employee={employee} deleteEmployee={deleteEmployee}/>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
