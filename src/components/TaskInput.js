import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, selectTask } from './Features/TasksSlice';
const TaskInput = () => {
  const dispatch = useDispatch();
  const [task,setTask] = useState('')
  const handleClick =()=>{
    if(task){
      const listedTask = {name:task,id:Math.random()}
      dispatch(addTask(listedTask))
      setTask('')
    }
  }
  return (
    <div>
      <input
      className='todo-input'
      placeholder='add task here'
      value = {task}
      onChange={(e)=> setTask(e.target.value)}
      >
      </input>
      <button className='todo-button' onClick={handleClick}>Add</button>
    </div>
  )
}

export default TaskInput
