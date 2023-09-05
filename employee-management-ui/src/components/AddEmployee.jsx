import React, { useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';


const AddEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const handleSubmit = async () => {
    try {
      const dataToSend = {
        firstName: firstName,
        lastName: lastName,
        email: email
      };
      const response = await axios.post('http://localhost:8080/api/v1/addNewEmp', dataToSend);
      
      if (response.status === 200) {
        clearForm();
        swal({
          title: "Good job!",
          text: "Employee added successfully!",
          icon: "success",
          button: "Aww yiss!"
        });
      }
    } catch (error) {
      console.error('There was an error adding the employee:', error.response ? error.response.data : error.message);
      swal({
        title: "Error!",
        text: "There was an error adding the employee. Please try again.",
        icon: "error",
        button: "Okay"
      });
    }
  };


  return (
    <div className="flex max-w-3xl mx-auto shadow border-b mt-2">
      <div className="p-8">
        <div className="font-thin text-2xl -tracking-wider mb-6">
          Add New Employee
        </div>

        <div className="mt-2 items-center justify-center">
          <label className="block font-thin">First Name : </label>
          <input 
            name="firstName" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="h-10 border p-1"
          ></input>
        </div>

        <div className="mt-2 items-center justify-center">
          <label className="block font-thin">Last Name : </label>
          <input 
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="h-10 border mx-auto p-1"
          ></input>
        </div>

        <div className="mt-2 items-center justify-center">
          <label className="block font-thin">Email : </label>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 border mx-auto p-1"
            type="email"
          ></input>
        </div>

        <div className="my-4 space-x-4">
          <button 
            onClick={handleSubmit}
            className="bg-green-400 p-2 px-6 rounded hover:bg-green-700 text-white"
          >
            Save
          </button>
          <button 
            onClick={clearForm}
            className="bg-red-400 p-2 px-6 rounded hover:bg-red-700 text-white"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
