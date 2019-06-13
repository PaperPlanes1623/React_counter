import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { value: 0 }
  //   this.inc = this.inc.bind(this)
  //   this.dec = this.dec.bind(this)
  // }

  state = { value: 0 }

  inc = () => {
    this.setState({ value: this.state.value + 1})
  }

  dec = () => {
    this.setState({ value: this.state.value - 1})
  }
  
  render() {
    const { name } = this.props
    const { value } = this.state
    return (
      <div>
      <h1 style={{ color: name, fontSize: '12px' }}>
        {name} counter
      </h1>
      <p>{value}</p>
      <button onClick={this.inc}>+</button>
      <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Counter;