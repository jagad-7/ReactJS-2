import React, { Component } from 'react'
import LifecyleB from './LifecycleB'

export class LifecycleD extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jagadeesh'
      }
      console.log('LifecycleD constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleD getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleD componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleD  shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleD getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleD componentDidUpdate')
    }
  render() {
    console.log('LifecycleD render')

    return(
       <div>
         <div>LifecycleD</div>
       </div>
    )    
  }
}

export default LifecycleD