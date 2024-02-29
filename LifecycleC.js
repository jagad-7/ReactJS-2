import React, { Component } from 'react'
import LifecyleD from './LifecycleD'

export class LifecycleC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Jagadeesh'
      }
      console.log('LifecycleC constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleC getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleC componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleC  shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleC getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleC componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

  render() {
    console.log('LifecycleC render')
    return(
       <div>
         <div>LifecycleC</div>
         <button onClick={this.changeState}>Change State</button>
         <LifecyleD />
       </div>
    )    
  }
}

export default LifecycleC