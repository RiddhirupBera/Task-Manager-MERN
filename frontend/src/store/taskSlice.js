const {createSlice} = require("@reduxjs/toolkit");

const taskSlice = createSlice({
    name : "tasks",
    initialState : {
        taskList : [],
        total : 0
    },
    reducers : {
        setTasks(state,action){
            state.taskList = action.payload;
            state.total = action.payload.length;
            //return {...state,total : state.taskList.length, taskList : state.taskList};
        },
        add(state,action){
            const updatedTaskList = state.taskList.concat(action.payload);
            return {...state,total : updatedTaskList.length, taskList : updatedTaskList};
        },
        remove(state,action){
            state.taskList = state.taskList.filter(
            task => task._id !== action.payload
            );
            state.total = state.taskList.length;
            // const updatedTaskList = state.taskList.filter(item=>item._id!==action.payload);
            // return { ...state,total : updatedTaskList.length, taskList : updatedTaskList};
        },
        complete(state,action){
            const updatedTaskList = state.taskList.filter(item=>item._id!==action.payload); 
            return { ...state,total : updatedTaskList.length, taskList : updatedTaskList};
        }
    }

});

export const {add, remove, complete, setTasks} = taskSlice.actions;
export const taskReducer = taskSlice.reducer;