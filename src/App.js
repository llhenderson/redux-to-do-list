import React from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import './App.css'
import { store } from './app/store';
const App = () => {
  return (
    <div className='todo-app'>
      <div>
        <div className='title'>
          TO DO LIST 
        </div>
        <div>
          <TaskInput/>
        </div>
        <div className='task-list'>
          <TaskList/>
        </div> 
      </div>
    </div>
  )
}

export default App
