import React from 'react';
import '../../css/TaskForm.css';

function TaskForm({text}) {
  return (
    <form className='task-form'>
      <input 
        className='task-input'
        type="text" 
        name="text" 
        placeholder='Write a task'
        />
        <button className='task-button'>Add task</button>

    </form>
  )
}

export default TaskForm;