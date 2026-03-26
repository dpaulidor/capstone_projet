import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, status: "Actif" }]);
    console.log("Nouvel employé ajouté :", employee);
  };

  return (
    <div>
      <h1>Application RH - Formulaire Employé</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <div>
        <h2>Liste des employés (pour debug)</h2>
        {employees.length === 0 && <p>Aucun employé pour le moment</p>}
        <ul>
          {employees.map((emp, index) => (
            <li key={index}>
              {emp.name} - {emp.position} - {emp.department} - {emp.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;