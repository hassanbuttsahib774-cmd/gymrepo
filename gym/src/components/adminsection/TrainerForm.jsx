import { useState } from "react";
// import "./TrainerForm.css";
import '../../styles/TrainerForm.css';         

const TrainerForm = () => {
  const [trainers, setTrainers] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    specialization: "",
    experience: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id === null) {
      setTrainers([...trainers, { ...form, id: Date.now() }]);
    } else {
      setTrainers(
        trainers.map((t) => (t.id === form.id ? form : t))
      );
    }

    setForm({ id: null, name: "", specialization: "", experience: "" });
  };

  const handleEdit = (trainer) => {
    setForm(trainer);
  };

  const handleDelete = (id) => {
    setTrainers(trainers.filter((t) => t.id !== id));
  };

  return (
    <div className="trainer-wrapper">
      <h2>Trainer Management</h2>

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
          {trainers.map((trainer) => (
            <tr key={trainer.id}>
              <td>{trainer.name}</td>
              <td>{trainer.specialization}</td>
              <td>{trainer.experience} Years</td>
              <td>
                <button onClick={() => handleEdit(trainer)}>Edit</button>
                <button
                  className="delete"
                  onClick={() => handleDelete(trainer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainerForm;
