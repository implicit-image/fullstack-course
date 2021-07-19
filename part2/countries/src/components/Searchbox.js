import React from 'react'


const Searchbox = ({ searchHandler }) => {
  return (
    <div>
      find countries <input onChange={searchHandler}/>
    </div>
  )
}

export default Searchbox
