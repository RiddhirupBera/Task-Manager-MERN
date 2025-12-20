import { useState } from 'react'
import '../App.css'
import { useDispatch,useSelector } from 'react-redux';
import { add, remove } from '../store/taskSlice';
import axios from "axios";
import { TaskListDisplay } from './taskListDisplay';

export const Dashboard = () =>{
    const taskList = useSelector(state => state.taskState.taskList);
    const total = useSelector(state=>state.taskState.total);
    const now = new Date();

    const activeTaskList = taskList.filter(t=>{
        return t.status==="active";
    })

    const priorityTaskWeek = taskList.filter(t=>{
        const taskDate = new Date(t.date);
        const diffDays = (taskDate - now) / (1000 * 60 * 60 * 24);
        return diffDays <= 7 && diffDays >= 0 && t.priority==="High"; 
    });
    const taskWeek = taskList.filter(t=>{
        const taskDate = new Date(t.date);
        const diffDays = (taskDate - now) / (1000 * 60 * 60 * 24);
        return diffDays <= 7 && diffDays >= 0; 
    });
    return(
        <>
        <div className='pageHeading'>
            DASHBOARD
        </div>
        <div className='dashboardContainer'>
            <div style={{display : "flex", justifyContent : "center", alignItems : "center", gap : "2rem"}}>
            <div className='urgentGlow'> 
                <h1>Priority (This Week): <span>{priorityTaskWeek.length}</span></h1>
            </div>

            <div className='mediumGlow'>
                 <h1>Total (This Week) : <span>{taskWeek.length}</span></h1>
            </div>
            </div>

            <div className='mediumGlow2'>
                 <h1>Total : <span>{activeTaskList.length}</span></h1>
            </div>

        </div>
        <div className='dashboardContainer'>
            <TaskListDisplay tasks={priorityTaskWeek} title={"Priority Tasks"}/>
        </div>
        </>
    )
}