import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import '../../css/TaskForm.css';



function TaskForm({text}) {

  const [input, setInput] = useState('');

  const handleChange = (e) => {

    setInput(e.target.value);
    
  };

  const handleSend = (e) => {

    e.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
      
    }
    console.log('enviando form', newTask);
  };

  return (
    <form className='task-form' onSubmit={handleSend}>
      <input 
        className='task-input'
        type="text" 
        name="text" 
        placeholder='Write a task'
        onChange={handleChange}
        />
        <button className='task-button'>Add task</button>

    </form>
  )
}

export default TaskForm;