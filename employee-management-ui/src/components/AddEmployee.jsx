import React from "react";

const AddEmployee = () => {
  return (
    <div className="flex max-w-3xl mx-auto shadow border-b mt-2">
      <div className="p-8">
        <div className="font-thin text-2xl -tracking-wider mb-6">Add New Employee</div>
        {/* First name */}
        <div className="mt-2 items-center justify-center">
            <label className="block font-thin">First Name : </label>
            <input className="h-10 border p-1"></input>
        </div>

        {/* Last name */}
        <div className="mt-2 items-center justify-center">
            <label className="block font-thin">Last Name : </label>
            <input className="h-10 border mx-auto p-1"></input>
        </div>

        {/* Email */}
        <div className="mt-2 items-center justify-center">
            <label className="block font-thin">Email : </label>
            <input className="h-10 border mx-auto p-1" type="email"></input>
        </div>

        {/* buttons */}
        <div className="my-4 space-x-4">
            <button className="bg-green-400 p-2 px-6 rounded hover:bg-green-700 text-white">
                Save
            </button>
            <button className="bg-red-400 p-2 px-6 rounded hover:bg-red-700 text-white">
                Clear
            </button>
        </div>


      </div>
    </div>
  );
};

export default AddEmployee;
