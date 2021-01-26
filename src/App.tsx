import React from 'react'
import Header from './Header'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

function App() {
  console.log("Render App")
  return (
    <div className="App">
      <Header buttonText="Click Me!"/>
      <h1>Hello World!</h1>
      Counter
      <Counter initialCount={0}/>
      Counter Hooks
      <CounterHooks initialCount={0}/>
    </div>
  )
}

export default App;
