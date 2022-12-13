import React from 'react'
import '../../css/TaskList.css'
import Task from '../Task/Task';

function TaskList() {

  return (
    <div className='main-list'>
      <h1>My Task</h1>
      <Task text={'Learning ReactJS with freecodecamp'}/>

    </div>
  )
}

export default TaskList;