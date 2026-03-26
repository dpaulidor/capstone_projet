import "./EmployeeCard.css";
function EmployeeCard({ employee }) {
  return (
    <div className="card">
      <p>Nom : {employee.name}</p>
      <p>Poste : {employee.position}</p>
      <p>Département : {employee.department}</p>
      <p>Statut : {employee.status}</p>
    </div>
  );
}

export default EmployeeCard;