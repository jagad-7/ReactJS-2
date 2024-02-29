import React, { Component } from 'react'

export class RegularCompo extends Component {
  render() {
    console.log('Regular Components')
    return (
      <div>
        Regular Component{this.props.name}
      </div>
    )
  }
}

export default RegularCompo