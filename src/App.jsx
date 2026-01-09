import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Enroll from "./pages/Enroll";

import { Routes, Route } from "react-router-dom";
import AddStudent from "./pages/AddStudent";

<Route path="/add-student" element={<AddStudent />} />

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <div className="content-wrapper">
        <Sidebar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/students" element={<Students />} />
            <Route path="/enroll" element={<Enroll />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
