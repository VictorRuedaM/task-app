import React, {useState} from 'react';
import '../../css/List.css'
import Task from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';


function List() {

  const [task, setTask] = useState([]);

  const addTask = (task) => {
    console.log('add task...');
    console.log(task)
  }

  return (
    <>
      <TaskForm/>
      <div className='task-list-container'>
        {
          task.map((t) => {
            <Task
              text={t.text}
              completed={t.completed}
            />
          })
        }
      </div>
    </>
  )
}

export default List;