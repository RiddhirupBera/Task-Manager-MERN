import { Outlet, NavLink } from "react-router-dom";
import "../App.css";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from "react";
import axios from "axios";
import { setTasks } from "../store/taskSlice";


export const AppLayout = () => {
    const dispatch = useDispatch();
    
  useEffect(() => {
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:4000/activeTasks");
      dispatch(setTasks(res.data.message));
      console.log("MSG",res.data.message)
    } catch (err) {
      console.error(err);
    }
  };

  fetchTasks();
}, [dispatch]);
  

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
        <NavLink to="/activeTasks">Active Tasks</NavLink>
        <NavLink to="/list">Task List</NavLink>
      </div>

      {/* PAGE CONTENT */}
      <div className="mainContent">
        <Outlet />
      </div>
    </>
  );
};
