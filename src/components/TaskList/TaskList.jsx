import React from 'react'
import '../../css/TaskList.css'
import List from '../List/List';


function TaskList() {

  return (
    <div className='main-list'>
      <h1>My Task</h1>
      <List/>

    </div>
  )
}

export default TaskList;