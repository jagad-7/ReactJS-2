import React, { Component } from 'react'
const heading = {
    fontSize: '26px',
    color: 'green',
}

export default class Form extends Component {
    constructor(props) {
      super(props)
      this.state = {
         username: '',
         comment: '',
         topic: 'React'
      }
    }

    handlerUsernameChange = (event)=>{
        this.setState ({
            username: event.target.value
        })
    }
    handlerCommentChange = (event) =>{
        this.setState ({
            comment: event.target.value
        })
        
    }
    handlerTopicChnage = (event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    hendleSubmit = (event)=>{
        alert('${this.state.username} ${this.state.comment} ${this.state.topic}')
        // event.preventDefault() we don't need refresh page use this code
    }
  render() {
    // const {username,topic,comment}=this.state
    // remove all this.state in valuse areas
    return (
     <form onSubmit={this.hendleSubmit}>
         <div>
            <label style={heading}>UserName </label>
            <input type='text' value={this.state.username} onChange={this.handlerUsernameChange}/>
        </div>
        <div>
            <label>Comment </label>
            <textarea value={this.state.comment} onChange={this.handlerCommentChange} />
        </div>
        <div>
            <label>Topic </label>
            <select value={this.state.topic} onChange={this.handlerTopicChnage}>
                <option value='react'>React</option>
                <option value='java'>Java</option>
                <option value='pyton'>Pyton</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
     </form>
    )
  }
}
