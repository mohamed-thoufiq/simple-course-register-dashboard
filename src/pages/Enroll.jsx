import { useEffect, useState } from "react";

function Enroll() {
  const [students, setStudents] = useState([]);
  const [course, setCourse] = useState("");
  const [studentId, setStudentId] = useState("");
  const [enrollments, setEnrollments] = useState([]);

  const courses = [
    "Intro to HTML",
    "CSS Basics",
    "JavaScript Fundamentals",
  ];

  // FETCH STUDENTS
  const fetchStudents = () => {
    fetch("http://localhost:3000/employees")
      .then(res => res.json())
      .then(data => setStudents(data));
  };

  // FETCH ENROLLMENTS
  const fetchEnrollments = () => {
    fetch("http://localhost:3000/enrollments")
      .then(res => res.json())
      .then(data => setEnrollments(data));
  };

  useEffect(() => {
    fetchStudents();
    fetchEnrollments();
  }, []);

  // ENROLL
  const handleEnroll = () => {
    if (!studentId || !course) {
      alert("Select student and course");
      return;
    }

    const student = students.find(s => s.id == studentId);

    fetch("http://localhost:3000/enrollments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        student: student.name,
        course
      }),
    })
      .then(() => {
        setStudentId("");
        setCourse("");
        fetchEnrollments();
      });
  };

  // CLEAR
  const clearEnrollments = () => {
    fetch("http://localhost:3000/enrollments", {
      method: "DELETE",
    }).then(fetchEnrollments);
  };

  return (
    <div>
      <h2>Enroll Student (API Based)</h2>

      <div className="enroll-card">
        <select
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        >
          <option value="">Select Student</option>
          {students.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          {courses.map((c, i) => (
            <option key={i}>{c}</option>
          ))}
        </select>

        <button onClick={handleEnroll}>Enroll</button>
        {enrollments.length > 0 && (
          <button className="clear-btn" onClick={clearEnrollments}>
            Clear Enrollments
          </button>
        )}
      </div>

      <h3>Enrolled Students</h3>

      {enrollments.length === 0 ? (
        <p>No enrollments yet</p>
      ) : (
        <ul className="list">
          {enrollments.map((e, i) => (
            <li key={i}>
              <strong>{e.student}</strong> → {e.course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Enroll;
