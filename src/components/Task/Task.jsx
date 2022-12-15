import React from 'react';
import '../../css/Task.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';

function Task({id, text, completed, taskCompleted, deleteTask}) {

  
  return (
    <div className={completed ? 'task-container completed' : 'task-container'}>
      <div className='task-text' onClick={() => taskCompleted(id)}>
        {text}
      </div>
      <div className='container-icons' onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='task-icon'/>
      </div>
    </div>
  )
}

export default Task;