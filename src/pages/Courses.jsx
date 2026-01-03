function Courses() {
  const courses = [
    {
      title: "Intro to HTML",
      duration: "2 Weeks",
      level: "Beginner",
    },
    {
      title: "CSS Basics",
      duration: "3 Weeks",
      level: "Beginner",
    },
    {
      title: "JavaScript Fundamentals",
      duration: "4 Weeks",
      level: "Intermediate",
    },
  ];

  const enrollCourse = (course) => {
    let enrolled = JSON.parse(localStorage.getItem("enrollments")) || [];

    if (enrolled.find((c) => c.title === course.title)) {
      alert("Already enrolled!");
      return;
    }

    enrolled.push(course);
    localStorage.setItem("enrollments", JSON.stringify(enrolled));
    alert("Enrolled successfully!");
  };

  return (
    <div>
      <h2>Courses</h2>

      <div className="course-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>

            <div className="course-info">
              <span>⏱ {course.duration}</span>
              <span>📘 {course.level}</span>
            </div>

            <button
              className="enroll-btn"
              onClick={() => enrollCourse(course)}
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
