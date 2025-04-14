import React from 'react'

const ToDoItem = ({newItem, onDelete}) => {
  return (
    <p id='to_do_item'>
      <span>{newItem.task}</span>
      <span>{newItem.date}</span>
      <span>{newItem.time}</span>
      <button onClick={() => onDelete(newItem)}>Delete</button>
    </p>
  )
}

export default ToDoItem