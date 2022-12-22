import React, {useState} from 'react';
import '../../css/List.css'
import Task from '../Task/Task';
import TaskForm from '../TaskForm/TaskForm';


function List() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if(task.text.trim()){
      task.text = task.text.trim();
      const taskUpdated = [task, ...tasks];
      setTasks(taskUpdated);
    }
  }

  const deleteTask = (id) => {

    const taskUpdated = tasks.filter((t) => t.id !== id);
    setTasks(taskUpdated);
  }

  const taskCompleted = (id) => {

    const taskUpdated = tasks.map((t) => {
      if(t.id === id){
        t.completed = !t.completed;
      }
      return t;
    });

    setTasks(taskUpdated);
  }

  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {
          tasks.map((t) => 
            <Task
              key={t.id}
              id={t.id}
              text={t.text}
              completed={t.completed}
              deleteTask={deleteTask}
              taskCompleted={taskCompleted}
            />
          )
        }
      </div>
    </>
  )
}

export default List;