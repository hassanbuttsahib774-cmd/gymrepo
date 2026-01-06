import { useState } from "react";
import "../../styles/AttendenceMark.css";

const AttendanceMark = ({ members }) => {
  const [date, setDate] = useState("");
  const [attendance, setAttendance] = useState({});
  const [records, setRecords] = useState([]);

  const markStatus = (id, status) => {
    setAttendance({ ...attendance, [id]: status });
  };

  const markAll = (status) => {
    const all = {};
    members.forEach((m) => {
      all[m.id] = status;
    });
    setAttendance(all);
  };

  const saveAttendance = () => {
    if (!date) {
      alert("Please select a date");
      return;
    }

    const dailyRecord = members.map((m) => ({
      name: m.name,
      date,
      status: attendance[m.id] || "Absent",
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
          {members.length === 0 ? (
            <tr>
              <td colSpan="2">No members available</td>
            </tr>
          ) : (
            members.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>
                  <button
                    className={attendance[m.id] === "Present" ? "present" : ""}
                    onClick={() => markStatus(m.id, "Present")}
                  >
                    Present
                  </button>
                  <button
                    className={attendance[m.id] === "Absent" ? "absent" : ""}
                    onClick={() => markStatus(m.id, "Absent")}
                  >
                    Absent
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="actions">
        <button onClick={saveAttendance}>Save Attendance</button>
        <button onClick={exportCSV}>Export Attendance</button>
      </div>

      <h3>Attendance Report</h3>
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
