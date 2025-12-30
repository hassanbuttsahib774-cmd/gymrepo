import { useState } from "react";
// import "./AttendanceMark.css";
import '../../styles/AttendenceMark.css';

const AttendanceMark = () => {
  const membersList = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Sara" },
  ];

  const [date, setDate] = useState("");
  const [attendance, setAttendance] = useState({});
  const [records, setRecords] = useState([]);

  const markStatus = (id, status) => {
    setAttendance({ ...attendance, [id]: status });
  };

  const markAll = (status) => {
    const all = {};
    membersList.forEach((m) => (all[m.id] = status));
    setAttendance(all);
  };

  const saveAttendance = () => {
    const dailyRecord = membersList.map((m) => ({
      name: m.name,
      status: attendance[m.id] || "Absent",
      date,
    }));
    setRecords([...records, ...dailyRecord]);
    setAttendance({});
  };

  const exportCSV = () => {
    let csv = "Name,Date,Status\n";
    records.forEach((r) => {
      csv += `${r.name},${r.date},${r.status}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "attendance_report.csv";
    a.click();
  };

  return (
    <div className="attendance-wrapper">
      <h2>Attendance System</h2>

      <div className="controls">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button onClick={() => markAll("Present")}>Mark All Present</button>
        <button onClick={() => markAll("Absent")}>Mark All Absent</button>
      </div>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Member</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {membersList.map((m) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>
                <button
                  className={
                    attendance[m.id] === "Present" ? "present" : ""
                  }
                  onClick={() => markStatus(m.id, "Present")}
                >
                  Present
                </button>
                <button
                  className={
                    attendance[m.id] === "Absent" ? "absent" : ""
                  }
                  onClick={() => markStatus(m.id, "Absent")}
                >
                  Absent
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="actions">
        <button onClick={saveAttendance}>Save Attendance</button>
        <button onClick={exportCSV}>Export Attendance</button>
      </div>

      <h3>Monthly Attendance Report</h3>
      <table className="report-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td>{r.date}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceMark;
