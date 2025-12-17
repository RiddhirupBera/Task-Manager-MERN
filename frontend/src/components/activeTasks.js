import { useEffect, useState } from 'react'
import '../App.css'
import { useDispatch,useSelector } from 'react-redux';
import { add, remove } from '../store/taskSlice';
import axios from "axios";
import { TaskListDisplay } from './taskListDisplay';

export const ActiveTasksList = () =>{

    const [activeTasks,setActiveTasks] = useState([]);

    useEffect(()=>{
        const fetchActiveTasks = async() =>{
        try{
            const activeTasksList = await axios.get("http://localhost:4000/activeTasks");
            setActiveTasks(activeTasksList.data.message);
        }catch(e){
            console.error("Failed to fetch active tasks", e);

        }
    }
    fetchActiveTasks();
    },[])

    return(
    <>
    <div style={{marginLeft : "5rem"}}>
        <TaskListDisplay tasks={activeTasks} title={"ACTIVE TASKS"}/>
        </div>
    </>
    )
}
