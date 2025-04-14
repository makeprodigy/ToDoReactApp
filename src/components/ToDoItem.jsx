import React from 'react'

const ToDoItem = ({newItem, onDelete}) => {
  return (
    <p id='to_do_item'>
      <div id='to_do_item_values'>
        <div 
        id='to_do_item_values_task'>
          {newItem.task}</div>
        <div 
        id='to_do_item_values_date'>
          {newItem.date}</div>
        <div id='to_do_item_values_time'>
          {newItem.time}</div>
      </div>
      <button id='delete_button' onClick={() => onDelete(newItem)}>Delete</button>
    </p>
  )
}

export default ToDoItem