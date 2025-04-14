import React, {useState} from 'react'

const ToDoInput = ({onAdd}) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleAdd = () => {
    if (!task || !date || !time) return

    const newItem = {
      id: Date.now(),
      task,
      date,
      time,
    }

    onAdd(newItem)
    setTask("")
    setDate("")
    setTime("")
  }

  return (
    <div id='to_do_input'>
      <input
        id='task_input'
        type='text'
        maxLength='30'
        placeholder='Enter task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        id='date_input'
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        id="time_input"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button 
      id='add_button' 
      onClick={handleAdd}>
        Add
      </button>
    </div>
  )
}

export default ToDoInput