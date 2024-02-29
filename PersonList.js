import React from 'react'

function PersonList() {
    const persons =[
        {
            id: 1,
            name: 'Siv',
            age: 30,
            skill: 'Java'
        },
        {
            id: 2,
            name: 'Ram',
            age: 28,
            skill: 'Pyton'
        },
        {
            id: 3,
            name: 'Jagadeesh',
            age: 27,
            skill: 'React'
        }
    ]
    const PersonList = persons.map(person => <person key={person.id} person = {person}/>)
  return (
    <div>
      {PersonList} 
    </div>
  )
}

export default PersonList