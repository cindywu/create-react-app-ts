import React, { useState } from 'react'

interface CounterHooksProps {
  initialCount : number
}

export default function CounterHooks({ initialCount }: CounterHooksProps) {
  const [state, setState] = useState({ count: initialCount })
  return (
    <div>
      <button onClick={() => setState(prevState => {
        return {count: prevState.count - 1}}
        )}>-</button>
      <span>{state.count}</span>
      <button onClick={() => setState(prevState => {
        return {count: prevState.count + 1 }}
        )}>+</button>
    </div>
  )
}