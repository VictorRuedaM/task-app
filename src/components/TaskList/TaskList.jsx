import React from 'react'
import '../../css/TaskList.css'
import Task from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';

function TaskList() {

  return (
    <div className='main-list'>
      <h1>My Task</h1>
      <TaskForm/>
      <Task text={'Learning ReactJS with freecodecamp'} completed={false}/>

    </div>
  )
}

export default TaskList;