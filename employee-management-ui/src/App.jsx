import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList/>} />
          <Route path="/" element={<EmployeeList/>}></Route>
          <Route path="/employeeList" element={<EmployeeList/>}></Route>
          <Route path="/addEmployee" element={<AddEmployee/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
