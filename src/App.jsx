import React from 'react'
import Header from './components/Header'
import ToDoInput from './components/ToDoInput'
import './App.css'

function ToDoApp() {
  
  return (
  <div id='main_container'>
    <Header id='header'/>
    <ToDoInput id='to_do_input'/>
  </div>
  )
}

export default ToDoApp
