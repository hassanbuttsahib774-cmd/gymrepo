import { useState } from "react";
import "../../styles/DietPlan.css";

const DietPlan = ({ members }) => {
  const [selectedMember, setSelectedMember] = useState("");
  const [diet, setDiet] = useState({ breakfast: "", lunch: "", dinner: "" });
  const [calories, setCalories] = useState({ breakfast: "", lunch: "", dinner: "" });
  const [plans, setPlans] = useState([]);
  const [editingMemberId, setEditingMemberId] = useState(null);

  // Handle diet input changes
  const handleDietChange = (e) => {
    setDiet({ ...diet, [e.target.name]: e.target.value });
  };

  const handleCaloriesChange = (e) => {
    setCalories({ ...calories, [e.target.name]: e.target.value });
  };

  // Save or update diet plan
  const savePlan = () => {
    if (!selectedMember) {
      alert("Select a member first");
      return;
    }

    const existingPlanIndex = plans.findIndex(p => p.memberId === selectedMember);

    const newPlan = {
      memberId: selectedMember,
      diet,
      calories
    };

    if (existingPlanIndex >= 0) {
      // Update existing
      const updatedPlans = [...plans];
      updatedPlans[existingPlanIndex] = newPlan;
      setPlans(updatedPlans);
    } else {
      setPlans([...plans, newPlan]);
    }

    // Reset form
    setDiet({ breakfast: "", lunch: "", dinner: "" });
    setCalories({ breakfast: "", lunch: "", dinner: "" });
    setEditingMemberId(null);
  };

  const editPlan = (memberId) => {
    const plan = plans.find(p => p.memberId === memberId);
    if (!plan) return;
    setSelectedMember(memberId);
    setDiet(plan.diet);
    setCalories(plan.calories);
    setEditingMemberId(memberId);
  };

  const deletePlan = (memberId) => {
    setPlans(plans.filter(p => p.memberId !== memberId));
    if (editingMemberId === memberId) {
      setDiet({ breakfast: "", lunch: "", dinner: "" });
      setCalories({ breakfast: "", lunch: "", dinner: "" });
      setEditingMemberId(null);
      setSelectedMember("");
    }
  };

  const getMemberName = (id) => members.find(m => m.id === id)?.name || "Unknown";

  return (
    <div className="dietplan-wrapper">
      <h2>Member Diet Plans</h2>

      {/* Select Member */}
      <div className="dietplan-form">
        <select
          value={selectedMember}
          onChange={(e) => setSelectedMember(Number(e.target.value))}
        >
          <option value="">Select Member</option>
          {members.map(m => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>

        {/* Diet Inputs */}
        <div className="meal-inputs">
          <div>
            <label>Breakfast:</label>
            <input
              type="text"
              name="breakfast"
              placeholder="Breakfast details"
              value={diet.breakfast}
              onChange={handleDietChange}
            />
            <input
              type="number"
              name="breakfast"
              placeholder="Calories"
              value={calories.breakfast}
              onChange={handleCaloriesChange}
            />
          </div>
          <div>
            <label>Lunch:</label>
            <input
              type="text"
              name="lunch"
              placeholder="Lunch details"
              value={diet.lunch}
              onChange={handleDietChange}
            />
            <input
              type="number"
              name="lunch"
              placeholder="Calories"
              value={calories.lunch}
              onChange={handleCaloriesChange}
            />
          </div>
          <div>
            <label>Dinner:</label>
            <input
              type="text"
              name="dinner"
              placeholder="Dinner details"
              value={diet.dinner}
              onChange={handleDietChange}
            />
            <input
              type="number"
              name="dinner"
              placeholder="Calories"
              value={calories.dinner}
              onChange={handleCaloriesChange}
            />
          </div>
        </div>

        <button onClick={savePlan}>
          {editingMemberId ? "Update Plan" : "Save Plan"}
        </button>
      </div>

      {/* Diet Plan Table */}
      <h3>Saved Diet Plans</h3>
      <table className="dietplan-table">
        <thead>
          <tr>
            <th>Member</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plans.map(p => (
            <tr key={p.memberId}>
              <td>{getMemberName(p.memberId)}</td>
              <td>{p.diet.breakfast} ({p.calories.breakfast} cal)</td>
              <td>{p.diet.lunch} ({p.calories.lunch} cal)</td>
              <td>{p.diet.dinner} ({p.calories.dinner} cal)</td>
              <td>
                <button onClick={() => editPlan(p.memberId)}>Edit</button>
                <button className="delete" onClick={() => deletePlan(p.memberId)}>Delete</button>
              </td>
            </tr>
          ))}

          {plans.length === 0 && (
            <tr>
              <td colSpan="5">No diet plans yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DietPlan;
