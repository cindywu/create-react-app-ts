import React, { Component } from 'react'

type MyProps = {
  initialCount: number
}

type MyState = {
  count: number
}

export default class Counter extends Component<MyProps, MyState> {
  state: MyState = {
    count: this.props.initialCount
  }
  render() {
    return (
      <div>
        <button onClick={() => this.changeCount(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeCount(1)}>+</button>
      </div>
    )
  }

  changeCount(amount: number) {
    this.setState(prevState => {
      return { count: prevState.count + amount}
    })
  }
}