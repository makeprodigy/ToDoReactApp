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
  const [editingId, setEditingId] = useState(null)
  const [editValues, setEditValues] = useState({ task: '', date: '', time: '' })

  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
  }, [toDoList])

  const handleAdd = (newItem) => {
    setToDoList([
      ...toDoList,
      { ...newItem, completed: false }
    ])
  }

  const handleDelete = (itemToDelete) => {
    const updatedList = toDoList.filter(item => item.id !== itemToDelete.id)
    setToDoList(updatedList)
  }

  const handleToggleComplete = (id) => {
    setToDoList(prevList => 
      prevList.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  const handleEdit = (item) => {
    setEditingId(item.id)
    setEditValues({ task: item.task, date: item.date, time: item.time })
  }

  const handleEditChange = (field, value) => {
    setEditValues(prev => ({ ...prev, [field]: value }))
  }

  const handleEditSave = (id) => {
    setToDoList(prevList =>
      prevList.map(item =>
        item.id === id ? { ...item, ...editValues } : item
      )
    )
    setEditingId(null)
    setEditValues({ task: '', date: '', time: '' })
  }

  const handleEditCancel = () => {
    setEditingId(null)
    setEditValues({ task: '', date: '', time: '' })
  }

  return (
    <div id='main_container'>
      <Header />
      <ToDoInput onAdd={handleAdd} />
      <ListDisplay 
        items={toDoList}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
        onEdit={handleEdit}
        editingId={editingId}
        editValues={editValues}
        onEditChange={handleEditChange}
        onEditSave={handleEditSave}
        onEditCancel={handleEditCancel}
      />
    </div>
  )
}

export default ToDoApp