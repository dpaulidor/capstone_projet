import EmployeeCard from "./EmployeeCard";
import "./EmployeeList.css";

function EmployeeList({ employees }) {
  if (employees.length === 0) {
    return <p>Aucun employé pour le moment</p>;
  }

  return (
    <div className="list-container">
      {employees.map((emp, index) => (
        <EmployeeCard key={index} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeeList;