import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const taskSlice = createSlice({
    name:'task',
    initialState:initialState,
    reducers: {
        addTask:(state,action)=>{
            state.push(action.payload)
            
        },
        removeTask:(state,action)=>{
            
            const {id} = action.payload
            return state.filter(task => task.id !== id)
            
        
        }
        
    }
})
export const selectTask =(state) => state.task;
export const {addTask,removeTask} = taskSlice.actions;
export default taskSlice.reducer;