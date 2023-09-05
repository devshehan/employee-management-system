import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <AddEmployee/>
    </>
  );
}

export default App;
