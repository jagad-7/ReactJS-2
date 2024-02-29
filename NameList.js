import React from 'react'
import './Style.css'

function NameList() {
  const names = ['Siv', 'Ram', 'jagdadeesh']
  // return (
  //   <div className='name'>
  //     <h1>{names[0]}</h1>
  //     <h2>{names[1]}</h2>
  //     <h3>{names[2]}</h3>
  //   </div>
  // )

  // map method
  return(
    <div>
     { names.map(name => <h1>{name}</h1>)}
    </div>
  )
}

export default NameList