// import MemberForm from "../../components/adminsection/MemberForm";
// import TrainerForm from "../../components/adminsection/TrainerForm";
// import AttendanceMark from "../../components/adminsection/AttendanceMark";
import MemberForm from "../components/adminsection/MemberForm";
import TrainerForm from "../components/adminsection/TrainerForm";
import AttendanceMark from "../components/adminsection/AttendenceMark";
const Admin = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Member Management</h2>
      <MemberForm />

      <hr />

      <h2>Trainer Management</h2>
      <TrainerForm />

      <hr />

      <h2>Attendance System</h2>
      <AttendanceMark />
    </div>
  );
};

export default Admin;
