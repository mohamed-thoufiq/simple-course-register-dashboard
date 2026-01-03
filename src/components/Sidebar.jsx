import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink to="/" end>Dashboard</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/students">Students</NavLink>
      <NavLink to="/enroll">Enroll</NavLink>
    </aside>
  );
}

export default Sidebar;
