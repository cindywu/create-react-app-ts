import React from 'react'
import Header from './Header'
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <Header buttonText="Click Me!"/>
      <h1>Hello World!</h1>
      <Counter initialCount={0}/>
    </div>
  )
}

export default App;
