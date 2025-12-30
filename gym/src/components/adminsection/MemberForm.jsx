import { useState } from "react";
// import "./MemberForm.css";
import '../../styles/MemberForm.css';

const MemberForm = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id === null) {
      setMembers([...members, { ...form, id: Date.now() }]);
    } else {
      setMembers(members.map((m) => (m.id === form.id ? form : m)));
    }
    setForm({ id: null, name: "", email: "", status: "Active" });
  };

  const handleEdit = (member) => setForm(member);
  const handleDelete = (id) =>
    setMembers(members.filter((m) => m.id !== id));

  const filteredMembers = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="member-wrapper">
      <h2>Member Management</h2>

      <form className="member-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Member Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select name="status" value={form.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit">
          {form.id ? "Update" : "Add"} Member
        </button>
      </form>

      <input
        className="search"
        type="text"
        placeholder="Search member"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="member-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredMembers.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td className={member.status === "Active" ? "active" : "inactive"}>
                {member.status}
              </td>
              <td>
                <button onClick={() => handleEdit(member)}>Edit</button>
                <button
                  className="delete"
                  onClick={() => handleDelete(member.id)}
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

export default MemberForm;
