import { useEffect, useState } from "react";

function Enroll() {
  const students = ["Arun", "Karthick", "Murugan", "Priya", "Jaya"];
  const courses = [
    "Intro to HTML",
    "CSS Basics",
    "JavaScript Fundamentals",
  ];

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("enrollments")) || [];
    setEnrollments(stored);
  }, []);

  const handleEnroll = () => {
    if (!selectedStudent || !selectedCourse) {
      alert("Please select both student and course");
      return;
    }

    const newEnrollment = {
      student: selectedStudent,
      course: selectedCourse,
    };

    const updated = [...enrollments, newEnrollment];
    setEnrollments(updated);
    localStorage.setItem("enrollments", JSON.stringify(updated));

    setSelectedStudent("");
    setSelectedCourse("");
  };

  const clearEnrollments = () => {
    if (!window.confirm("Are you sure you want to clear all enrollments?")) {
      return;
    }

    localStorage.removeItem("enrollments");
    setEnrollments([]);
  };

  return (
    <div>
      <h2>Enroll Student</h2>

      {/* Enrollment Form */}
      <div className="enroll-card">
        <select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Select Student</option>
          {students.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          {courses.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button onClick={handleEnroll}>Enroll</button>

        {/* Clear Button */}
        {enrollments.length > 0 && (
          <button
            className="clear-btn"
            onClick={clearEnrollments}
          >
            Clear Enrollments
          </button>
        )}
      </div>

      {/* Enrollments List */}
      <h3>Enrolled Students</h3>

      {enrollments.length === 0 ? (
        <p>No enrollments yet</p>
      ) : (
        <ul className="list">
          {enrollments.map((item, index) => (
            <li key={index}>
              <strong>{item.student}</strong> → {item.course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Enroll;
