import React, {useState} from 'react';
import '../../css/TaskForm.css';



function TaskForm({text}) {

  const [input, setInput] = useState('');

  const handleChange = (e) => {

    setInput(e.target.value);
    
  };

  const handleSend = (e) => {

    const newTask = {
      id: '777',
      text: input
      
    }
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