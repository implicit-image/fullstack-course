import React from 'react'
import DetailedCountry from './DetailedCountry'

const Results = ({ results, search }) => {

  return (
    <ul>
    {
      results.length > 10
        ? <li>Too many matches, specify another filter</li>
          : results.length === 1
            ? <DetailedCountry country={results[0]} />
      : results.map(country => <li key={country.numericCode}>{country.name}</li>)


    }
    </ul>
  )
}

export default Results
