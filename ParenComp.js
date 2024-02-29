import React, { Component } from 'react'
import RegularCompo from './RegularCompo'
import PureCompo from './PureCompo'
import Memocomp from './Memocomp'

export class ParenComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jagadeesh'
      }
    }
    componentDidMount(){
        setInterval( () => {
            this.setState({
                name: 'Jagadeesh'
            })
        }, 2000)
    }
  render() {
    console.log('Parent Components')
    return (
      <div>
        Parent Component
        {/* <RegularCompo name={this.state.name} />
        <PureCompo name={this.state.name} /> */}
        <Memocomp name={this.state.name} />
      </div>
    )
  }
}

export default ParenComp