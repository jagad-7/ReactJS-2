import React from 'react'

function Name() {
    const names = ['jagad','ram','siv']
    const nameList = names.map((names,index) => <h2 key={index}>{index} {names}</h2>)
  return (
    <div>
    {nameList}
    </div>
  )
}

export default Name