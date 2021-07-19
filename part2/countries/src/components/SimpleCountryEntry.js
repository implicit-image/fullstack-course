import React from 'react'


const SimpleCountryEntry = ({ country, showDetailed }) => {
  return (
    <li>
      {country.name}
      <button onClick={() => showDetailed(country)}>show</button>
    </li>
  )
}

export default SimpleCountryEntry
