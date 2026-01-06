import { useState } from "react";
import MemberForm from "../components/adminsection/MemberForm";
import TrainerForm from "../components/adminsection/TrainerForm";
import AttendanceMark from "../components/adminsection/AttendenceMark";
import Assign from "../components/adminsection/Assign";
import DietPlan from "../components/adminsection/DietPlan";

const Admin = () => {
  // MEMBERS
  const [members, setMembers] = useState([]);

  // TRAINERS ✅ ADD THIS
  const [trainers, setTrainers] = useState([]);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Member Management</h2>
      <MemberForm members={members} setMembers={setMembers} />

      <hr />

      <h2>Trainer Management</h2>
      {/* ✅ PASS PROPS */}
      <TrainerForm trainers={trainers} setTrainers={setTrainers} />

      <hr />

      <h2>Attendance System</h2>
      <AttendanceMark members={members} />
      <h2>Assign Trainer</h2>
<Assign members={members} trainers={trainers} />


<DietPlan members={members} />


    </div>
  );
};

export default Admin;
