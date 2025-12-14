import { Outlet, NavLink } from "react-router-dom";
import "../App.css";

export const AppLayout = () => {
  return (
    <>
      {/* FIXED HEADER */}
      <div className="topHeader">
        TASK MANAGER      
      </div>

      {/* FIXED SIDEBAR */}
      <div className="sideNav">
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/add">Add Task</NavLink>
        <NavLink to="/list">Task List</NavLink>
      </div>

      {/* PAGE CONTENT */}
      <div className="mainContent">
        <Outlet />
      </div>
    </>
  );
};
