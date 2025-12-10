const {createSlice} = require("@reduxjs/toolkit");

const taskSlice = createSlice({
    name : "tasks",
    initialState : {
        taskList : []
    },
    reducers : {
        add(state,action){
            const updatedTaskList = state.taskList.concat(action.payload);
            return {...state,taskList : updatedTaskList};
        },
        remove(state,action){
            const updatedTaskList = state.taskList.filter(item=>item.id!==action.payload);
            return { ...state, taskList : updatedTaskList};
        }
    }

});

export const {add, remove} = taskSlice.actions;
export const taskReducer = taskSlice.reducer;