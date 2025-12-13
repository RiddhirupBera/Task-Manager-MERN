import { useState } from 'react'
import '../App.css'
import { useDispatch,useSelector } from 'react-redux';
import { add, remove } from '../store/taskSlice';
import axios from "axios";

export const Dashboard = () =>{
    const taskList = useSelector(state => state.taskState.taskList);
    const total = useSelector(state=>state.taskState.total);
    const now = new Date();

    const priorityTaskWeek = taskList.filter(t=>{
        const taskDate = new Date(t.date);
        const diffDays = (taskDate - now) / (1000 * 60 * 60 * 24);
        return diffDays <= 7 && diffDays >= 0; // upcoming within a week
    });
    return(
        <>
        <h1>Total : {total}</h1>
        <h2>Priority : {priorityTaskWeek.length}</h2>
        </>
    )
}