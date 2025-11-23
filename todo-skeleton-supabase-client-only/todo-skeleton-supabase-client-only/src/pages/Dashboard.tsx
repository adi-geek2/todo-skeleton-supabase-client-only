import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Dashboard(){
  const [counts, setCounts] = useState({total:0, overdue:0, today:0})

  useEffect(()=>{ load() },[])

  async function load(){
    const { data: all } = await supabase.from('tasks').select('id,deadline,status')
    if(!all) return
    const total = all.length
    const todayStr = new Date().toISOString().slice(0,10)
    const overdue = all.filter((t:any)=> t.deadline && t.deadline < todayStr).length
    const today = all.filter((t:any)=> t.deadline === todayStr).length
    setCounts({total, overdue, today})
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <div>Total tasks: {counts.total}</div>
      <div>Overdue: {counts.overdue}</div>
      <div>Due today: {counts.today}</div>
    </div>
  )
}
