import React from 'react'
import ToDoItem from './ToDoItem'

const ListDisplay = ({items, onDelete, onToggleComplete, onEdit, editingId, editValues, onEditChange, onEditSave, onEditCancel}) => {
  return (
      <div id='list_display'>
          {
            items.map((item) => (
              <ToDoItem 
                key={item.id}
                newItem={item}
                onDelete={onDelete}
                onToggleComplete={onToggleComplete}
                onEdit={onEdit}
                isEditing={editingId === item.id}
                editValues={editValues}
                onEditChange={onEditChange}
                onEditSave={onEditSave}
                onEditCancel={onEditCancel}
              />
            ))
          }
      </div>
  )
}

export default ListDisplay