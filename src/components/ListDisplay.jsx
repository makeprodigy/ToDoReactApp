import React from 'react'
import ToDoItem from './ToDoItem'

const ListDisplay = ({items, onDelete}) => {
  return (
      <div id='list_display'>
          {
            items.map((item) => (
              <ToDoItem 
              key={item.id}
              newItem={item}
              onDelete={onDelete}
              />
            ))
          }
      </div>
  )
}

export default ListDisplay