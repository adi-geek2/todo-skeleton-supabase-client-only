import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Tasks from './pages/Tasks'
import Dashboard from './pages/Dashboard'

export default function Router(){
  return (
    <div>
      <nav style={{marginBottom:16}}>
        <Link to="/">Login</Link> | <Link to="/tasks">Tasks</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  )
}
