import { useState } from 'react'
import '../App.css'
import { useDispatch,useSelector } from 'react-redux';
import { add, remove } from '../store/taskSlice';
import axios from "axios";
import { Notification} from './notification';

export const NewTask = () =>{

    const dispatch = useDispatch();
    const taskList = useSelector(state => state.taskState.taskList);

    const [task,setTask] = useState("");
    const [priority,setPriority] = useState("Medium");
    const [date,setDate] = useState("");
    const [taskList1,setTaskList] = useState([]);
    const [itemId, setItemId] = useState(0);
    const [notification, setNotification] = useState({
    message: "",
    type: ""
  });

    const handleTask = (e) =>{
        setTask(e.target.value);
    }
    const handlepriority = (e) =>{
        setPriority(e.target.value);
    }
    const handleDate = (e) =>{
        setDate(e.target.value);
    }
    const handleSubmit = (e) =>{
        //setItemId(itemId + 1);
        let taskCurr = {
            id : crypto.randomUUID(),
            task,
            priority,
            date
        }
        // setTaskList([taskCurr,...taskList1]);
        if(task==="" || priority==="" || date===""){
            setNotification({ message: "Fill all fields", type: "error" });
            autoClose();
            return;
        }
        dispatch(add(taskCurr));
        setTask("");
        setPriority("Medium");
        setDate("");
        setNotification({message : "Task added successfully",type : "success"})
        
    }
    const deleteRow = (id) =>{
        setTaskList(taskList1.filter(item=>item.id!==id));
        dispatch(remove(id));
    }
    const callAPI = () =>{
        axios.get("http://localhost:4000/")
        .then(res => console.log(res.data))
        .catch(err => console.log(err));

    }
    const autoClose = () => {
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

    return(
        <>
        <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "" })}
      />
    <div className="centered">
       <div className='pageHeading'>ADD TASK</div>
    <div className="row1">
        <label style={{color : "white"}} htmlFor="taskInput">Task</label>
      <input id='taskInput' type="text" value={task} onChange={handleTask} className='inputBox' ></input>
      {/* <input type="text" value={priority} onChange={handlepriority} className='inputBox'></input> */}
      <label style={{color : "white"}} htmlFor="selectP">Priority</label>   
        <select id = "selectP" value={priority} onChange={handlepriority} className='inputBoxSelect' > 
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
      <label style={{color : "white"}} htmlFor="taskInput">Deadline</label>
      <input type="date" value={date} onChange={handleDate} className='inputBox'></input>
    </div>
    <div className='row1'><button onClick={handleSubmit} className = 'addButton'>Add</button></div>
    {/* <div className='row1'><button onClick={()=>{console.log("redux",taskList)}} className = 'addButton'>Check</button></div> */}
    {/* <div className='row1'><button onClick={callAPI} className = 'addButton'>Call</button></div> */}


    
    </div>
    </>
    )
}