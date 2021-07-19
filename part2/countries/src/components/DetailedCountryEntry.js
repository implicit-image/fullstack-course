import React from 'react'



const DetailedCountryEntry = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(lang =>
          <li key={lang.nativeName}>{lang.name}</li>)
        }
      </ul>
    <img
      src={country.flag}
      alt={`flag of ${country.name}`}
      width="125"
      height="125"
    />
    </div>
  )
}

export default DetailedCountryEntry
