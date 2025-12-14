import { useState } from 'react'
import '../App.css'
import { useDispatch,useSelector } from 'react-redux';
import { add, remove } from '../store/taskSlice';
import axios from "axios";

export const TaskListDisplay = ({tasks, title}) =>{

    const dispatch = useDispatch();

    const deleteRow = (id) =>{
        dispatch(remove(id));
    }

    return(
        <div style={{paddingBottom : "40px", width : "90%"}}>
            <div className='pageHeading'>
                {title}
            </div>
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
         
        {tasks.map((t)=>(
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
