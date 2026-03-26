function EmployeeCard({ employee }) {
  return (
    <div>
      <p>Nom : {employee.name}</p>
      <p>Poste : {employee.position}</p>
      <p>Département : {employee.department}</p>
      <p>Statut : {employee.status}</p>
    </div>
  );
}

export default EmployeeCard;