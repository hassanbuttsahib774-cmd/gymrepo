import { useState } from "react";
import "../../styles/TrainerForm.css";

const TrainerForm = ({ trainers, setTrainers }) => {
  const [form, setForm] = useState({
    id: null,
    name: "",
    specialization: "",
    experience: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add / Update Trainer
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id === null) {
      // ADD trainer
      setTrainers([...trainers, { ...form, id: Date.now() }]);
    } else {
      // UPDATE trainer
      setTrainers(
        trainers.map((t) => (t.id === form.id ? form : t))
      );
    }

    // Reset form
    setForm({ id: null, name: "", specialization: "", experience: "" });
  };

  // Edit trainer
  const handleEdit = (trainer) => {
    setForm(trainer);
  };

  // Delete trainer
  const handleDelete = (id) => {
    setTrainers(trainers.filter((t) => t.id !== id));
  };

  return (
    <div className="trainer-wrapper">
      <h2>Trainer Management</h2>

      {/* Trainer Form */}
      <form className="trainer-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Trainer Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={form.specialization}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="experience"
          placeholder="Experience (Years)"
          value={form.experience}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {form.id ? "Update" : "Add"} Trainer
        </button>
      </form>

      {/* Trainer Table */}
      <table className="trainer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialization</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {trainers.length === 0 ? (
            <tr>
              <td colSpan="4">No trainers found</td>
            </tr>
          ) : (
            trainers.map((t) => (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td>{t.specialization}</td>
                <td>{t.experience} Years</td>
                <td>
                  <button onClick={() => handleEdit(t)}>Edit</button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(t.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TrainerForm;
