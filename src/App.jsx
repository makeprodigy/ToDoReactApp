import React, { useState } from 'react'
import Header from './components/Header'
import ToDoInput from './components/ToDoInput'
import ToDoFilter from './components/ToDoFilter'
import ListDisplay from './components/ListDisplay'
import Footer from './components/Footer'

import './App.css'

const ToDoApp = () => {
  const [toDoList, setToDoList] = useState([])

  const handleAdd = (newItem) => {
    setToDoList([...toDoList, newItem])
  }

  const handleDelete = (itemToDelete) => {
    const updatedList = toDoList.filter(item => item !== itemToDelete)
    setToDoList(updatedList)
  }
  
  return (
  <div id='main_container'>
    <Header 
    id='header' 
    />

    <ToDoInput 
    id='to_do_input' 
    onAdd={handleAdd}
    />

    <ToDoFilter 
    id='to_do_filter' 
    />

    <ListDisplay 
    id='list_display' 
    items={toDoList} 
    onDelete={handleDelete}
    />

    <Footer 
    id='footer' 
    />
    
  </div>
  )
}

export default ToDoApp