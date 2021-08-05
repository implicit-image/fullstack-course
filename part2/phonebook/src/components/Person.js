import React from 'react'


const Person = ({name, number, deleter}) => {
  return (
    <li>{name} {number} <button onClick={deleter}>Delete</button></li>
  )
}


export default Person
