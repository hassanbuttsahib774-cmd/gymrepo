import { useState } from "react";
import MemberForm from "../components/adminsection/MemberForm";
import TrainerForm from "../components/adminsection/TrainerForm";
import AttendanceMark from "../components/adminsection/AttendenceMark";

const Admin = () => {
  // 🔥 SINGLE SOURCE OF TRUTH
  const [members, setMembers] = useState([]);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Member Management</h2>
      <MemberForm members={members} setMembers={setMembers} />

      <hr />

      <h2>Trainer Management</h2>
      <TrainerForm />

      <hr />

      <h2>Attendance System</h2>
      <AttendanceMark members={members} />
    </div>
  );
};

export default Admin;
