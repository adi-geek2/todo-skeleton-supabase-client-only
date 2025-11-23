import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

type Task = {
  id: number
  title: string
  deadline?: string
  priority?: string
  category?: string
  status?: string
}

export default function Tasks(){
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')

  useEffect(()=>{
    fetchTasks()
  },[])

  async function fetchTasks(){
    const { data, error } = await supabase.from('tasks').select('*').order('created_at', {ascending:false}).limit(100)
    if(error) console.error(error)
    else setTasks(data as Task[])
  }

  async function addTask(){
    if(!title) return
    const { data, error } = await supabase.from('tasks').insert([{ title }])
    if(error) console.error(error)
    else {
      setTitle('')
      fetchTasks()
    }
  }

  return (
    <div>
      <h3>Tasks</h3>
      <div style={{marginBottom:12}}>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="New task title" />
        <button onClick={addTask} style={{marginLeft:8}}>Add</button>
      </div>
      <ul>
        {tasks.map(t=> (
          <li key={t.id}>{t.title} {t.deadline ? `- due ${t.deadline}` : ''}</li>
        ))}
      </ul>
    </div>
  )
}
