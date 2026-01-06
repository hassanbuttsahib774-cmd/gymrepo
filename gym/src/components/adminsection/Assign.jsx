import { useState } from "react";
import "../../styles/Assign.css";

const Assign = ({ members, trainers }) => {
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [selectedMember, setSelectedMember] = useState("");
  const [assignments, setAssignments] = useState([]);

  // Assign a member to a trainer
  const assignMember = () => {
    if (!selectedTrainer || !selectedMember) {
      alert("Select both trainer and member");
      return;
    }

    const exists = assignments.find(
      (a) => a.memberId === Number(selectedMember)
    );

    if (exists) {
      alert("Member already assigned. Change trainer instead.");
      return;
    }

    setAssignments([
      ...assignments,
      {
        trainerId: Number(selectedTrainer), // ✅ convert to number
        memberId: Number(selectedMember),   // ✅ convert to number
      },
    ]);

    setSelectedMember("");
  };

  // Change the trainer of a member
  const changeTrainer = (memberId, newTrainerId) => {
    setAssignments(
      assignments.map((a) =>
        a.memberId === memberId
          ? { ...a, trainerId: Number(newTrainerId) } // ✅ convert to number
          : a
      )
    );
  };

  // Remove a member assignment
  const removeAssignment = (memberId) => {
    setAssignments(assignments.filter((a) => a.memberId !== memberId));
  };

  // Get names from IDs
  const getTrainerName = (id) =>
    trainers.find((t) => t.id === id)?.name || "Unknown";

  const getMemberName = (id) =>
    members.find((m) => m.id === id)?.name || "Unknown";

  return (
    <div className="assign-wrapper">
      <h2>Assign Member to Trainer</h2>

      {/* Assign Interface */}
      <div className="assign-form">
        <select
          value={selectedTrainer}
          onChange={(e) => setSelectedTrainer(e.target.value)}
        >
          <option value="">Select Trainer</option>
          {trainers.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>

        <select
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
        >
          <option value="">Select Member</option>
          {members.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>

        <button onClick={assignMember}>Assign</button>
      </div>

      {/* Assignment List */}
      <h3>Trainer Assignments</h3>
      <table className="assign-table">
        <thead>
          <tr>
            <th>Member</th>
            <th>Trainer</th>
            <th>Change Trainer</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a) => (
            <tr key={a.memberId}>
              <td>{getMemberName(a.memberId)}</td>
              <td>{getTrainerName(a.trainerId)}</td>
              <td>
                <select
                  onChange={(e) =>
                    changeTrainer(a.memberId, e.target.value)
                  }
                  value={a.trainerId} // ✅ show current trainer as selected
                >
                  <option value="">Change Trainer</option>
                  {trainers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <button
                  className="delete"
                  onClick={() => removeAssignment(a.memberId)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}

          {assignments.length === 0 && (
            <tr>
              <td colSpan="4">No assignments yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Assign;
