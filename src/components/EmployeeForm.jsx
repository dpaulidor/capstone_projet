import { useState } from "react";
import "./EmployeeForm.css";
function EmployeeForm({ addEmployee }) {
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        department: "",
        status: "Actif"
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.position || !formData.department) {
            alert("Veuillez remplir tous les champs");
            return;
        }

        addEmployee(formData);
        setFormData({ name: "", position: "", department: "", status: "Actif" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter un employé</h2>
            <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="text"
                name="position"
                placeholder="Poste"
                value={formData.position}
                onChange={handleChange}
            />
            <input
                type="text"
                name="department"
                placeholder="Département"
                value={formData.department}
                onChange={handleChange}
            />

            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
            >
                <option value="Actif">Actif</option>
                <option value="Inactif">Inactif</option>
            </select>

            <button type="submit">Ajouter</button>
        </form>
    );
}

export default EmployeeForm;