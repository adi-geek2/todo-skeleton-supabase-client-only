import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

export default function App(){
  return (
    <BrowserRouter>
      <div style={{fontFamily:'Arial, sans-serif', padding:20}}>
        <h2>Todo - Skeleton</h2>
        <Router />
      </div>
    </BrowserRouter>
  )
}
