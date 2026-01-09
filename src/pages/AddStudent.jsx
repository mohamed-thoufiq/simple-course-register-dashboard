import { useState } from "react";

function AddStudent() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    district: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Student added successfully");
        setForm({ id: "", name: "", email: "", district: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Add Student (POST API)</h2>

      <div className="enroll-card">
        <input name="id" placeholder="ID" onChange={handleChange} />
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="district" placeholder="District" onChange={handleChange} />

        <button onClick={handleSubmit}>Add Student</button>
      </div>
    </div>
  );
}

export default AddStudent;
