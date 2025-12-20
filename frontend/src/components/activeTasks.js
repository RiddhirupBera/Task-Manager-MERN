import { useState } from 'react'
import '../App.css'
import { useDispatch,useSelector } from 'react-redux';
import { add, remove } from '../store/taskSlice';
import axios from "axios";
import { TaskListDisplay } from './taskListDisplay';

export const ActiveTasksList = () =>{

    const dispatch = useDispatch();
    const taskList = useSelector(state => state.taskState.taskList);
    const activeList = taskList.filter(t=>{
        return t.status==="active";
    })

    console.log("ilst",taskList)

    return(
    <>
    <div style={{marginLeft : "5rem"}}>
        <TaskListDisplay tasks={activeList} title={"ACTIVE TASKS"} display={false}/>
        </div>
    </>
    )
}
