import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import ToDoInput from './components/ToDoInput'
import ListDisplay from './components/ListDisplay'
import Footer from './components/Footer'

import './App.css'

const ToDoApp = () => {
  const [toDoList, setToDoList] = useState(() => {
    const savedList = localStorage.getItem('toDoList')
    return savedList ? JSON.parse(savedList) : []
  })

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
  }, [toDoList])

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