import React, { Component } from 'react'

export class input extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
    }
    inputFocus(){
        this.inputRef.current.focus()
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
      </div>
    )
  }
}

export default input