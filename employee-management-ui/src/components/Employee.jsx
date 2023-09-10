import React from "react";

const Employee = ({employee, deleteEmployee}) => {
  return (
    <tr key={employee.id}>
      <td className="text-left font-thin px-6 py-4">
        <div>{employee.firstName}</div>
      </td>
      <td className="text-left font-thin px-6 py-4">
        <div>{employee.lastName}</div>
      </td>
      <td className="text-left font-thin px-6 py-4">
        <div>{employee.email}</div>
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
            onClick={(e,id) => deleteEmployee(e, employee.id)}
            className="bg-red-400 p-2 px-6 rounded hover:bg-red-700 text-white"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Employee;
