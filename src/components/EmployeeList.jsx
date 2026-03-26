import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {
  if (employees.length === 0) {
    return <p>Aucun employé pour le moment</p>;
  }

  return (
    <div>
      {employees.map((emp, index) => (
        <EmployeeCard key={index} employee={emp} />
      ))}
    </div>
  );
}

export default EmployeeList;