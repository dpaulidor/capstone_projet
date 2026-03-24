import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([
    { name: "John Doe", position: "Manager", department: "HR", status: "Actif" },
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, status: "Actif" }]);
  };

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;