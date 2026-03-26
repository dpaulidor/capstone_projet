import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import "./App.css";
function App() {
  const [employees, setEmployees] = useState([
    { name: "", position: "", department: "" },
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee }]);
  };

  return (
    <div>
      <h1>Application Employee</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />

    </div>
  );
}

export default App;