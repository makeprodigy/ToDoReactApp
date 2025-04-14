import React, { useState } from 'react'
import Header from './components/Header'
import ToDoInput from './components/ToDoInput'
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
    <Header />

    <ToDoInput 
    onAdd={handleAdd}
    />

    <ListDisplay 
    items={toDoList} 
    onDelete={handleDelete}
    />

    {/* <Footer />    */}
  </div>
  )
}

export default ToDoApp