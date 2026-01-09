import { useEffect, useState } from "react";

function Students() {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);
  const [district, setDistrict] = useState("");

  const fetchStudents = () => {
    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // DELETE
  const deleteStudent = (id) => {
    if (!window.confirm("Delete this student?")) return;

    fetch(`http://localhost:3000/employees/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchStudents());
  };

  // UPDATE
  const updateStudent = () => {
    fetch(`http://localhost:3000/employees/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ district }),
    })
      .then(() => {
        setEditId(null);
        setDistrict("");
        fetchStudents();
      });
  };

  return (
    <div>
      <h2>Students (CRUD via API)</h2>

      <div className="student-grid">
        {students.map((s) => (
          <div key={s.id} className="student-card">
            <div className="student-avatar">{s.name[0]}</div>

            <h3>{s.name}</h3>
            <p>{s.email}</p>
            <p><strong>District:</strong> {s.district}</p>

            {editId === s.id ? (
              <>
                <input
                  placeholder="New District"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
                <button onClick={updateStudent}>Save</button>
              </>
            ) : (
              <button onClick={() => setEditId(s.id)}>Edit</button>
            )}

            <button className="clear-btn" onClick={() => deleteStudent(s.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
