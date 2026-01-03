function Students() {
  const students = [
    "Arun",
    "Karthick",
    "Murugan",
    "Priya",
    "Jaya",
  ];

  return (
    <div>
      <h2>Students</h2>

      <div className="student-grid">
        {students.map((student, index) => (
          <div key={index} className="student-card">
            <div className="student-avatar">
              {student.charAt(0)}
            </div>
            <h3>{student}</h3>
            <p>Active Student</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
