import { useState } from 'react'
import '../App.css'
import { useDispatch,useSelector } from 'react-redux';
import { add, remove } from '../store/taskSlice';
import axios from "axios";

export const TaskList = () =>{

    const dispatch = useDispatch();
    const taskList = useSelector(state => state.taskState.taskList);
    const total = useSelector(state=>state.taskState.total);

    const deleteRow = (id) =>{
        dispatch(remove(id));
    }

    return(
        <div style={{paddingBottom : "40px"}}>
        <table className='tableStyle'>
            <thead>
                            <tr>
                                <th>Task</th>
                                <th>Priority</th>
                                <th>Deadline</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
         
        {taskList.map((t)=>(
            // <div className="row1">
                <tr>
            <td>{t.task}</td>
            <td>{t.priority}</td>
            <td>{t.date}</td>
            <td><button onClick={()=>deleteRow(t.id)} className='deleteBtn'>❌</button></td>
            </tr>
            // </div>
        ))}
        
        </tbody>
        </table>
    
    </div>
    )
}
