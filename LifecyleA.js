import React, { Component } from 'react'
import LifecyleB from './LifecycleB'

export class LifecyleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jagadeesh'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
  render() {
    console.log('LifecycleA render')

    return(
       <div>
         <div>LifecyleA</div>
         <LifecyleB />
       </div>
    )    
  }
}

export default LifecyleA