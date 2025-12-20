import { useState } from 'react'
import '../App.css'
import { useDispatch,useSelector } from 'react-redux';
import { add, remove } from '../store/taskSlice';
import axios from "axios";
import { TaskListDisplay } from './taskListDisplay';

export const AllTaskList = () =>{

    const dispatch = useDispatch();
    const taskList = useSelector(state => state.taskState.taskList);

    console.log("ilst",taskList)

    return(
    <>
    <div style={{marginLeft : "5rem"}}>
        <TaskListDisplay tasks={taskList} title={"ALL TASKS"} display={true}/>
        </div>
    </>
    )
}
