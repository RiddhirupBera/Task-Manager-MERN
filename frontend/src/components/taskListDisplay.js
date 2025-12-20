import { useState,useEffect } from 'react'
import '../App.css'
import { useDispatch,useSelector } from 'react-redux';
import { add, remove } from '../store/taskSlice';
import axios from "axios";

export const TaskListDisplay = ({tasks, title, display}) =>{
    const dispatch = useDispatch();

    const deleteRow =  (t) =>{
        axios.put(`http://localhost:4000/updateTask/${t._id}`, {
        status : "deleted"
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

        dispatch(remove(t._id));
    }

    const completeRow = (t) =>{
        axios.put(`http://localhost:4000/updateTask/${t._id}`, {
        status : "completed"
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

        dispatch(remove(t._id));
    }   

   

    return(
        <div style={{paddingBottom : "40px", width : "90%"}}>
            <div className='pageHeading'>
                {title}
            </div>
        {!display && <table className='tableStyle'>
            <thead>
                            <tr>
                                <th>Task</th>
                                <th>Priority</th>
                                <th>Deadline</th>
                                <th>Completed</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
         
        {tasks.map((t)=>(
            // <div className="row1">
                <tr key={t._id}>
            <td>{t.task}</td>
            <td>{t.priority}</td>
            <td>{t.date}</td>
            <td><button onClick={()=>completeRow(t)} className='completeBtn'>✅</button></td>
            <td><button onClick={()=>deleteRow(t)} className='deleteBtn'>❌</button></td>
            </tr>
            // </div>
        ))}
        
        </tbody>
        
        </table>
}
    {display && 
        <table className='tableStyle'>
            <thead>
                            <tr>
                                <th>Task</th>
                                <th>Priority</th>
                                <th>Deadline</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
         
        {tasks.map((t)=>(
            // <div className="row1">
                <tr key={t._id}>
            <td>{t.task}</td>
            <td>{t.priority}</td>
            <td>{t.date}</td>
            <td>{t.status}</td>
            </tr>
            // </div>
        ))}
        
        </tbody>
        
        </table>
    }
    
    </div>
    )
}
