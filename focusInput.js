import React, { Component } from 'react'
import input from './input'
class focusInput extends Component {
    constructor(props) {
      super(props)
        this.componentRef = React.createRef()
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default focusInput