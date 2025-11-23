import React from 'react'

export default function Login(){
  return (
    <div>
      <h3>Login (placeholder)</h3>
      <p>This starter uses client-side Supabase keys (anon). To keep it simple, use a fixed demo email or press "Continue" to go to tasks.</p>
      <button onClick={()=> location.href = '/tasks'}>Continue</button>
    </div>
  )
}
