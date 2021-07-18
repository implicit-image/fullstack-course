import React from 'react'





const Filter = ({ onSearchChange }) => {
  return (
    <p>
      search by name <input onChange={onSearchChange}/>
    </p>
  )
}

export default Filter
