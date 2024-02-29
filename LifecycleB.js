import React, { Component } from 'react'

export class LifecyleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jagadeesh'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
  render() {
    console.log('LifecycleB render')

    return(
        <div>LifecyleB</div>
    )    
  }
}

export default LifecyleB