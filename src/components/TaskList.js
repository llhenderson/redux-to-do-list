import React from 'react'
import { useSelector } from 'react-redux';
import { selectTask } from './Features/TasksSlice';
import { useDispatch } from 'react-redux';
import { removeTask } from './Features/TasksSlice';


const TaskList = () => {
    const dispatch=useDispatch();
    const tasks = useSelector(selectTask)
    const clickHandler=(task)=>{
        dispatch(removeTask(task))
    }
    return  tasks.map((task,index)=>(
        <div className='todo-row' key={index}>
            <div>
                {task.name} 
            </div>
            <div>
                <button className='todo-button' onClick={()=>clickHandler(task)}>delete</button>  
            </div>
        </div>
    ))
}

export default TaskList
