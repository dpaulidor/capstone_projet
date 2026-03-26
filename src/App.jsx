import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [employees, setEmployees] = useState([
    { name: "John Doe", position: "Manager", department: "HR", status: "Actif" },
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, status: "Actif" }]);
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