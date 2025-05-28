import React from 'react'

const ToDoItem = ({ newItem, onDelete, onToggleComplete, onEdit, isEditing, editValues, onEditChange, onEditSave, onEditCancel }) => {
  const handleCheckboxChange = () => {
    onToggleComplete(newItem.id);
  };

  if (isEditing) {
    return (
      <div id='to_do_item' className='editing'>
        <div id='to_do_item_values'>
          <input
            type='text'
            value={editValues.task}
            onChange={e => onEditChange('task', e.target.value)}
            maxLength={30}
            className='edit-input'
            placeholder='Task name'
          />
          <input
            type='date'
            value={editValues.date}
            onChange={e => onEditChange('date', e.target.value)}
            className='edit-input'
          />
          <input
            type='time'
            value={editValues.time}
            onChange={e => onEditChange('time', e.target.value)}
            className='edit-input'
          />
        </div>
        <div className='item-actions'>
          <button className='save-btn' onClick={() => onEditSave(newItem.id)}>
            Save
          </button>
          <button className='cancel-btn' onClick={onEditCancel}>
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div id='to_do_item' className={newItem.completed ? 'completed' : ''}>
      <input
        type='checkbox'
        checked={newItem.completed}
        onChange={handleCheckboxChange}
        className='complete-checkbox'
        aria-label='Mark as completed'
      />
      <div id='to_do_item_values'>
        <div id='to_do_item_values_task'>
          {newItem.task}
        </div>
        <div className='todo-meta'>
          <div id='to_do_item_values_date'>
            {newItem.date}
          </div>
          <div id='to_do_item_values_time'>
            {newItem.time}
          </div>
        </div>
      </div>
      <div className='item-actions'>
        <button id='edit_button' onClick={() => onEdit(newItem)}>
          Edit
        </button>
        <button id='delete_button' onClick={() => onDelete(newItem)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default ToDoItem